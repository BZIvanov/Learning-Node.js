const fs = require("node:fs");
const path = require("node:path");

function getContentType(url) {
  const ext = path.extname(url).toLowerCase();

  const map = {
    ".css": "text/css",
    ".ico": "image/x-icon",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".js": "application/javascript",
    ".svg": "image/svg+xml",
  };

  return map[ext] || "application/octet-stream";
}

module.exports = (req, res) => {
  const baseURL = `http://${req.headers.host}`;
  req.pathname = req.pathname || new URL(req.url, baseURL).pathname;

  if (req.pathname.startsWith("/public/") && req.method === "GET") {
    const filePath = path.join(__dirname, "..", req.pathname.slice(1));

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          "Content-Type": "text/plain",
        });

        res.write("Resource not found!");
        res.end();
        return;
      }

      res.writeHead(200, {
        "Content-Type": getContentType(req.pathname),
      });

      res.write(data);
      res.end();

      return true;
    });
  } else {
    return false;
  }
};
