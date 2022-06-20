import express from "express";
import rateLimit from "express-rate-limit";
import Path from 'path';

const app = express();

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(function (req, res, next) {
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' https://ya-praktikum.tech wss://ya-praktikum.tech; font-src 'self'; img-src 'self' https://ya-praktikum.tech; script-src 'self'; style-src 'self' 'unsafe-inline'; frame-src 'self'"
  );
  return next();
});

app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/public"));

app.use("/svg", express.static(Path.resolve("/public/svg")));
app.use("/fonts", express.static(Path.resolve("/public/fonts")));

app.get("/", apiLimiter, (req, res) =>
  res.sendFile(__dirname + "/dist/index.html")
);
app.get("/sign-up", apiLimiter, (req, res) =>
  res.sendFile(__dirname + "/dist/index.html")
);
app.get("/messenger", apiLimiter, (req, res) =>
  res.sendFile(__dirname + "/dist/index.html")
);
app.get("/settings", apiLimiter, (req, res) =>
  res.sendFile(__dirname + "/dist/index.html")
);
app.get("*", apiLimiter, (req, res) => {
  if (res.status(404)) {
    res.sendFile(__dirname + "/public/404.html");
  }
  if (res.status(500)) {
    res.sendFile(__dirname + "/public/500.html");
  }
});

app.listen(process.env.PORT || 3000, () =>
  console.log(`Listening on port ${process.env.PORT || 3000}!`)
);
