/**
 * Postbuild orchestrator: prefetch WordPress data, then prerender with react-snap.
 *
 * Prerendering is a progressive enhancement, not a hard requirement: the app is a
 * working SPA on its own. Historically any single react-snap hiccup (one route
 * exceeding its 30s navigation timeout) exited non-zero and took the entire
 * Netlify deploy down with it, so a transient backend slowdown meant no deploy at all.
 *
 * This script makes that failure mode non-fatal. If prefetch or prerendering fails
 * we log loudly, guarantee a deployable SPA shell (build/200.html, which the
 * catch-all rule in public/_redirects serves for any route that wasn't prerendered),
 * and exit 0 so the site still ships. Worst case is a client-rendered page instead
 * of a prerendered one. Best case, and the normal case, is a full prerender.
 *
 * Set SNAP_STRICT=1 to restore fail-hard behaviour (useful when debugging locally).
 */
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
const { prefetch } = require("./snap-prefetch");

const buildDir = path.join(__dirname, "..", "build");
const indexHtml = path.join(buildDir, "index.html");
const shellHtml = path.join(buildDir, "200.html");
const strict = process.env.SNAP_STRICT === "1";

function warn(what, err) {
  console.log("");
  console.log("  ============================================================");
  console.log(`  WARNING: ${what}`);
  console.log(`  Reason: ${err && err.message ? err.message : err}`);
  console.log("  The site will deploy WITHOUT full prerendering.");
  console.log("  Pages still work for visitors, but are client-rendered,");
  console.log("  which is worse for SEO. Investigate and redeploy.");
  console.log("  ============================================================");
  console.log("");
}

/**
 * The catch-all redirect serves 200.html for any route react-snap did not write.
 * react-snap normally creates it; if it never ran, seed it from the CRA shell.
 */
function ensureSpaShell() {
  if (fs.existsSync(shellHtml)) return;
  if (fs.existsSync(indexHtml)) {
    fs.copyFileSync(indexHtml, shellHtml);
    console.log("  wrote build/200.html from index.html (SPA fallback shell)");
  } else {
    console.log("  ERROR: build/index.html missing, cannot create SPA shell");
    process.exit(1); // CRA build itself is broken; that is a real failure
  }
}

function bail(what, err) {
  if (strict) {
    console.error(`${what}: ${err && err.message ? err.message : err}`);
    process.exit(1);
  }
  warn(what, err);
  ensureSpaShell();
  process.exit(0);
}

(async () => {
  try {
    await prefetch();
  } catch (e) {
    return bail("Could not fetch WordPress data for prerendering", e);
  }

  let reactSnapBin;
  try {
    reactSnapBin = require.resolve("react-snap/run.js");
  } catch (e) {
    return bail("Could not locate react-snap", e);
  }

  const res = spawnSync(process.execPath, [reactSnapBin], { stdio: "inherit" });

  if (res.error) return bail("react-snap could not be started", res.error);
  if (res.status !== 0) {
    return bail(
      "Prerendering did not complete",
      new Error(`react-snap exited with code ${res.status}`)
    );
  }

  ensureSpaShell();
  console.log("prerendering complete");
})();
