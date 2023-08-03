// const express = require("express");
import express from "express";
import configViewEngines from "./config/viewengines.js";
import initWebRouter from "./router/web";
require("dotenv").config();

const app = express();
const port = process.env.PORT;

configViewEngines(app);
initWebRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
