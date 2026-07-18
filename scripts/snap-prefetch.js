/**
 * Fetches each WordPress collection once into build/snap-data, so the react-snap
 * crawl can read them locally instead of refetching all five on every one of the
 * ~97 routes it renders (see the ReactSnap branch in src/actions/index.js).
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

const ATTEMPTS = 3;

const wait = ms => new Promise(r => setTimeout(r, ms));

async function get(name, url) {
  for (let attempt = 1; ; attempt++) {
    try {
      const { data } = await axios.get(url, { timeout: 90000 });
      return data;
    } catch (e) {
      if (attempt === ATTEMPTS) throw e;
      console.log(`  ${name} attempt ${attempt} failed (${e.message}), retrying`);
      await wait(attempt * 3000);
    }
  }
}

async function prefetch() {
  fs.mkdirSync(outDir, { recursive: true });
  for (const [name, url] of targets) {
    const data = await get(name, url);
    // The app reads only name/description from the wp-json root; skip the ~470KB
    // of route metadata the rest of that response carries.
    const payload =
      name === "settings" ? { name: data.name, description: data.description } : data;
    fs.writeFileSync(path.join(outDir, `${name}.json`), JSON.stringify(payload));
  }
}

module.exports = { prefetch };
