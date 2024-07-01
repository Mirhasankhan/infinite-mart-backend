import express from "express";
import { watchListController } from "./watchList.controller";

const router = express.Router();

router.post("/add-watchlist", watchListController.addToWatchList);
router.get("/all-watchList", watchListController.getAllWatchList);
router.delete("/:id", watchListController.deleteWishlist);

export const watchListRoutes = router;
