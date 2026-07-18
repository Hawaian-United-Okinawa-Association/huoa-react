/**
 * Postbuild: prefetch WordPress data, then prerender with react-snap.
 *
 * Prerendering is an SEO enhancement, not a requirement, but it used to run as a
 * bare postbuild script so a single route exceeding react-snap's 30s navigation
 * timeout exited non-zero and failed the whole Netlify deploy. Here a failure is
 * logged and swallowed instead: the site ships client-rendered, served by the
 * catch-all in public/_redirects.
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { prefetch } = require("./snap-prefetch");

const buildDir = path.join(__dirname, "..", "build");
const indexHtml = path.join(buildDir, "index.html");
const shellHtml = path.join(buildDir, "200.html");

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
    return bail(`could not fetch WordPress data (${e.message})`);
  }

  const res = spawnSync(process.execPath, [require.resolve("react-snap/run.js")], {
    stdio: "inherit"
  });

  if (res.error) return bail(`could not start react-snap (${res.error.message})`);
  if (res.status !== 0) return bail(`react-snap exited with code ${res.status}`);

  ensureSpaShell();
})();
