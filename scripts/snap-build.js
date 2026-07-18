/**
 * Postbuild: prefetch WordPress data, then prerender with react-snap.
 *
 * react-snap used to run as a bare postbuild script, so one route exceeding its
 * 30s navigation timeout exited non-zero and failed the deploy, leaving the site
 * stuck on the previous build. A prerender failure is therefore logged and
 * swallowed here: un-prerendered routes are served the SPA shell by the catch-all
 * in public/_redirects and fetch their data at runtime.
 *
 * A prefetch failure is different and must stay fatal. If WordPress is unreachable
 * now it is probably unreachable for visitors too, so shipping a shell that has to
 * fetch from it would replace a working prerendered site with a blank one. Failing
 * keeps the last good deploy, which is self-contained.
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { prefetch } = require("./snap-prefetch");

const buildDir = path.join(__dirname, "..", "build");
const indexHtml = path.join(buildDir, "index.html");
const shellHtml = path.join(buildDir, "200.html");

// react-snap generates one page per club and per event, so the prefetched record
// counts say how many should exist. A run that exits 0 having produced far fewer
// has gone wrong quietly (bad data, a routing change, an early exit), and Netlify
// would publish it without complaint. Checked only when react-snap reports
// success: a run that already failed has warned loudly and is handled above.
function checkCoverage() {
  for (const name of ["clubs", "events"]) {
    const records = JSON.parse(
      fs.readFileSync(path.join(buildDir, "snap-data", `${name}.json`), "utf8")
    ).length;
    const dir = path.join(buildDir, name);
    const built = fs.existsSync(dir)
      ? fs.readdirSync(dir, { withFileTypes: true }).filter(e => e.isDirectory()).length
      : 0;
    if (built < Math.floor(records * 0.9)) {
      console.error(`\nOnly ${built} of ${records} ${name} pages were prerendered.`);
      console.error("Failing the build rather than publishing a site missing pages.\n");
      process.exit(1);
    }
  }
}

// react-snap writes 200.html itself; seed it from the CRA shell if it never ran.
function ensureSpaShell() {
  if (fs.existsSync(shellHtml)) return;
  if (!fs.existsSync(indexHtml)) {
    console.error("build/index.html missing, cannot create SPA shell");
    process.exit(1);
  }
  fs.copyFileSync(indexHtml, shellHtml);
}

function bail(reason) {
  console.log(`\nWARNING: ${reason}`);
  console.log("Deploying WITHOUT prerendering: pages still work but are");
  console.log("client-rendered, which is worse for SEO. Investigate and redeploy.\n");
  ensureSpaShell();
  process.exit(0);
}

(async () => {
  try {
    await prefetch();
  } catch (e) {
    console.error(`\nCould not fetch WordPress data: ${e.message}`);
    console.error("Failing the build so the last good deploy keeps serving.\n");
    process.exit(1);
  }

  const res = spawnSync(process.execPath, [require.resolve("react-snap/run.js")], {
    stdio: "inherit"
  });

  if (res.error) return bail(`could not start react-snap (${res.error.message})`);
  if (res.status !== 0) return bail(`react-snap exited with code ${res.status}`);

  checkCoverage();
  ensureSpaShell();
})();
