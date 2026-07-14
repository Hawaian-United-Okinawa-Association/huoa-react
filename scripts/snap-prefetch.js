/**
 * Pre-crawl data fetch for react-snap.
 *
 * react-snap runs each route as an isolated headless-Chrome navigation. Because
 * the app refetches all five WordPress collections on every route mount
 * (see src/base/Init.js), a full crawl fires ~5 requests per route — hundreds of
 * concurrent hits at dev.huoa.org, which then throttles/503s and stalls
 * navigation past react-snap's 30s timeout, failing the whole build.
 *
 * This script fetches each collection ONCE (sequentially, off a healthy backend)
 * and writes it to build/snap-data/*.json. Under the ReactSnap user agent the app
 * reads those local files (see src/actions/index.js), so the crawl makes zero
 * requests to dev.huoa.org. Remote load drops from ~485 requests to 5.
 *
 * If any endpoint fails, the build aborts here (exit 1) rather than letting
 * react-snap bake empty state into the prerendered HTML.
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

(async () => {
  fs.mkdirSync(outDir, { recursive: true });
  for (const [name, url] of targets) {
    const t0 = Date.now();
    const { data } = await axios.get(url, { timeout: 60000 });
    // The app only reads name/description from the wp-json root; don't ship the
    // ~470KB of route/namespace metadata the settings endpoint returns.
    const payload =
      name === "settings" ? { name: data.name, description: data.description } : data;
    fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(payload));
    console.log(`  prefetched ${name} in ${Date.now() - t0}ms`);
  }
  console.log("snap-prefetch complete");
})().catch(e => {
  console.error("snap-prefetch failed:", e.message);
  process.exit(1);
});
