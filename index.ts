import express from "express";

const app = express();

app.use(express.static(__dirname + "/dist"));
app.use(express.static(__dirname + "/public"));
app.use("/svg", express.static(__dirname + "/src/assets/svg"));
app.use("/fonts", express.static(__dirname + "/src/assets/fonts"));

app.get("/", (req, res) => res.sendFile(__dirname + "/dist/index.html"));
app.get("/auth", (req, res) => res.sendFile(__dirname + "/dist/index.html"));
app.get("/registration", (req, res) =>
  res.sendFile(__dirname + "/dist/index.html")
);
app.get("/chats", (req, res) => res.sendFile(__dirname + "/dist/index.html"));
app.get("/profile", (req, res) => res.sendFile(__dirname + "/dist/index.html"));
app.get("*", (req, res) => {
  if (res.status(404)) {
    res.sendFile(__dirname + "/public/404.html");
  }
  if (res.status(500)) {
    res.sendFile(__dirname + "/public/500.html");
  }
});

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}!`));