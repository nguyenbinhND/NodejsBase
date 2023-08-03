import express from "express";
import { getHomepage } from "../controller/homeController";

let router = express.Router();
const initWebRouter = (app) => {
  router.get("/", getHomepage);
  return app.use("/", router);
};

export default initWebRouter;
