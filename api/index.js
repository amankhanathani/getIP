const path = require("path");
const app = require("express")();
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/*", (req, res) => {
  res.send({
    IP:
      req.headers["x-forwarded-for"]?.split(",").shift() ||
      req.socket?.remoteAddress,
    device: req.headers["user-agent"].split("(")[1].split(")")[0],
    browser:
      req.headers["user-agent"].split("(")[
        req.headers["user-agent"].split("(").length - 1],
  });
});
module.exports = app;
