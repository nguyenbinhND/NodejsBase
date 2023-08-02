const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World! with nguyen binh");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});