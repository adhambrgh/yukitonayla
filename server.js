const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const MIME = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".mp3": "audio/mpeg",
  ".mp4": "video/mp4",
};

http.createServer((req, res) => {
  let pathname = req.url.split("?")[0];
  try {
    pathname = decodeURIComponent(pathname);
  } catch {
    res.writeHead(400);
    res.end("Bad request");
    return;
  }
  const file = path.join(__dirname, pathname === "/" ? "index.html" : pathname);
  const ext = path.extname(file).toLowerCase();
  const type = MIME[ext] || "application/octet-stream";

  fs.stat(file, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not found");
      return;
    }

    const total = stat.size;
    const range = req.headers.range;
    const match = range && /^bytes=(\d*)-(\d*)$/.exec(range.trim());

    if (match) {
      let start = match[1] === "" ? NaN : Number(match[1]);
      let end = match[2] === "" ? NaN : Number(match[2]);
      if (Number.isNaN(start)) {
        start = total - (Number.isNaN(end) ? 0 : end);
        end = total - 1;
      } else if (Number.isNaN(end)) {
        end = total - 1;
      }
      if (start > end || start >= total) {
        res.writeHead(416, { "Content-Range": `bytes */${total}` });
        res.end();
        return;
      }
      end = Math.min(end, total - 1);
      res.writeHead(206, {
        "Content-Type": type,
        "Content-Length": end - start + 1,
        "Content-Range": `bytes ${start}-${end}/${total}`,
        "Accept-Ranges": "bytes",
      });
      if (req.method === "HEAD") return res.end();
      fs.createReadStream(file, { start, end }).pipe(res);
      return;
    }

    res.writeHead(200, {
      "Content-Type": type,
      "Content-Length": total,
      "Accept-Ranges": "bytes",
    });
    if (req.method === "HEAD") return res.end();
    fs.createReadStream(file).pipe(res);
  });
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});