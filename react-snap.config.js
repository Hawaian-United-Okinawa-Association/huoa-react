module.exports = {
  cacheAjaxRequests: true,
  skipRequests: req =>
    new URL(req.url).pathname.startsWith("/donate"),
  puppeteerArgs: [
    "--no-sandbox",
    "--disable-setuid-sandbox",
    "--disable-dev-shm-usage"
  ]
};
