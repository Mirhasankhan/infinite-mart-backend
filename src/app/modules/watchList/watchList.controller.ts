import { Request, Response } from "express";
import { watchListDB } from "./watchList.service";

const addToWatchList = async (req: Request, res: Response) => {
  try {
    const watchList = req.body;
    const result = await watchListDB.addToWatchList(watchList);

    res.status(200).json({
      success: true,
      message: "Added To watchlist",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: `something went wrong`,
    });
  }
};

const getAllWatchList = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string | undefined;

    const result = await watchListDB.getAllWatchListFromDB(email);
    res.status(200).json({
      success: true,
      message: "watchlist retrieved successfully",
      data: result,
    });
  } catch (err) {
    console.error("Error retrieving products:", err);
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving products",
    });
  }
};

export const watchListController = {
  addToWatchList,
  getAllWatchList,
};
