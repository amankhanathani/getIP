const app = require("express")().get("/", (req, res) => {
  res.send({
    IP:
      req.headers["x-forwarded-for"]?.split(",").shift() ||
      req.socket?.remoteAddress,
    device : req.headers["user-agent"].split("(")[1].split(")")[0]  ,
    browser : req.headers["user-agent"].split("(") ,
    language: req.headers["accept-language"]        
  });
});
module.exports = app;
