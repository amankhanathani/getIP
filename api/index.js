const app = require("express")().get("/", (req, res) => {
  res.json({
    IP:
      req.headers["x-forwarded-for"]?.split(",").shift() ||
      req.socket?.remoteAddress,
  });
});
module.exports = app;
