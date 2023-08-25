const exp = require("express");
const app = exp();

module.exports = app.get("/gadgets", (req, resp) => {
  resp.sendFile("./gadgets.html", { root: __dirname });
});

app.listen(3000);
