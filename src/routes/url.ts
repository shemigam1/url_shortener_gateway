import { Router } from "express";
import authMiddleWare from "../middlewares/authMiddleware";
import {
  createShortUrlController,
  getAllShortUrlsController,
  getShortUrlController,
  getShortUrlCountController,
  updateShortUrlController,
} from "../controllers/url";

const urlRouter = Router();

urlRouter.get("/:shortUrl", authMiddleWare, getShortUrlController);
urlRouter.get(
  "/analytics/:shortUrl",
  authMiddleWare,
  getShortUrlCountController
);
urlRouter.get("/", authMiddleWare, getAllShortUrlsController);
urlRouter.post("/", authMiddleWare, createShortUrlController);
// urlRouter.put("/:shortUrl", authMiddleWare, updateShortUrlController);
urlRouter.delete("/:shortUrl", authMiddleWare, updateShortUrlController);
// urlRouter.get("/:shortUrl", authMiddleWare, updateShortUrlController);

export default urlRouter;
