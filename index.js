const express = require("express");
const app = express();
const port = 3000;

const link = "https://www.facebook.com/GART6520";

app.get("/", (req, res) => {
  res.redirect(link);
});

app.use(function (req, res) {
  res.redirect(link);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
