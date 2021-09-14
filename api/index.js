const app = require("express")().get("/", (req, res) => {
  res.send({
    IP:
      req.headers["x-forwarded-for"]?.split(",").shift() ||
      req.socket?.remoteAddress,
    OS: req.headers["user-agent"].split("(")[1].split(")")[0],
    Browser: req.headers["user-agent"].split("(")[0],
    Language: req.headers["accept-language"].split(",")[0],
    Time: new Date().toLocaleString(),
  });
});
module.exports = app;
