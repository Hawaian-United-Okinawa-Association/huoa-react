/**
 * Pre-crawl data fetch for react-snap.
 *
 * react-snap runs each route as an isolated headless-Chrome navigation. Because
 * the app refetches all five WordPress collections on every route mount
 * (see src/base/Init.js), a full crawl fired ~485 requests at dev.huoa.org,
 * which throttled and 503'd under that load and stalled navigation past
 * react-snap's 30s timeout, failing the build.
 *
 * This module fetches each collection ONCE and writes it to build/snap-data.
 * Under the ReactSnap user agent the app reads those local files
 * (see src/actions/index.js), so the crawl makes zero requests to the backend.
 *
 * Exported for scripts/snap-build.js; also runnable directly for debugging.
 */
const fs = require("fs");
const path = require("path");
const axios = require("axios");

const api = "https://dev.huoa.org/wp-json";
const outDir = path.join(__dirname, "..", "build", "snap-data");

const targets = [
  ["pages", `${api}/wp/v2/pages?page=1&per_page=100&orderby=parent&order=asc`],
  ["clubs", `${api}/wp/v2/clubs?&page=1&per_page=100&orderby=slug&order=asc`],
  ["events", `${api}/wp/v2/events?page=1&per_page=100&orderby=date&order=asc`],
  ["newsletters", `${api}/wp/v2/newsletters?page=1&per_page=100&orderby=slug&order=desc`],
  ["settings", `${api}`]
];

const ATTEMPTS = 4;
const TIMEOUT_MS = 90000;

const wait = ms => new Promise(r => setTimeout(r, ms));

async function fetchWithRetry(name, url) {
  let lastErr;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    const t0 = Date.now();
    try {
      const { data } = await axios.get(url, { timeout: TIMEOUT_MS });
      console.log(`  prefetched ${name} in ${Date.now() - t0}ms`);
      return data;
    } catch (e) {
      lastErr = e;
      const backoff = attempt * 3000;
      console.log(
        `  prefetch ${name} attempt ${attempt}/${ATTEMPTS} failed after ` +
          `${Date.now() - t0}ms (${e.message})` +
          (attempt < ATTEMPTS ? `, retrying in ${backoff}ms` : "")
      );
      if (attempt < ATTEMPTS) await wait(backoff);
    }
  }
  throw lastErr;
}

async function prefetch() {
  fs.mkdirSync(outDir, { recursive: true });
  for (const [name, url] of targets) {
    const data = await fetchWithRetry(name, url);
    // The app only reads name/description from the wp-json root; don't ship the
    // ~470KB of route/namespace metadata the settings endpoint returns.
    const payload =
      name === "settings" ? { name: data.name, description: data.description } : data;
    fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(payload));
  }
  console.log("snap-prefetch complete");
}

module.exports = { prefetch };

if (require.main === module) {
  prefetch().catch(e => {
    console.error("snap-prefetch failed:", e.message);
    process.exit(1);
  });
}
