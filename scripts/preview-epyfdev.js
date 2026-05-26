const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 3000;
const rootDir = path.resolve(__dirname, "..", "epyfdev-site");

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

function send(res, statusCode, body, contentType) {
  res.writeHead(statusCode, { "Content-Type": contentType });
  res.end(body);
}

function resolveRequestPath(urlPath) {
  const cleanPath = decodeURIComponent((urlPath || "/").split("?")[0]);
  const relativePath = cleanPath === "/" ? "index.html" : cleanPath.replace(/^\/+/, "");
  const filePath = path.resolve(rootDir, relativePath);

  if (!filePath.startsWith(rootDir)) {
    return null;
  }

  return filePath;
}

const server = http.createServer((req, res) => {
  const filePath = resolveRequestPath(req.url);

  if (!filePath) {
    send(res, 403, "Forbidden", "text/plain; charset=utf-8");
    return;
  }

  fs.readFile(filePath, (error, file) => {
    if (!error) {
      const ext = path.extname(filePath).toLowerCase();
      send(res, 200, file, contentTypes[ext] || "application/octet-stream");
      return;
    }

    if (error.code === "ENOENT") {
      send(res, 404, "Not found", "text/plain; charset=utf-8");
      return;
    }

    send(res, 500, "Internal server error", "text/plain; charset=utf-8");
  });
});

server.listen(port, () => {
  console.log(`Preview running at http://localhost:${port}`);
  console.log(`Serving ${rootDir}`);
});
