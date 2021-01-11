const express = require("express");
const app = express();
var port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.json({ message: "Ahoy!" });
});
app.get("/v1/test", (req, res) => {
  res.json({ message: "test!" });
});

app.listen(port, () => {
  console.log("Application is running on port "+port);
});
