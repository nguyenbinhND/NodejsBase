// const express = require("express");
import express from "express";
import configViewEngines from "./config/viewengines.js";
const app = express();
const port = 3000;

configViewEngines(app);

app.get("/", function (req, res) {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
