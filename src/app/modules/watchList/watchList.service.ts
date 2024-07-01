import { TWatchList } from "./watchList.interface";
import { watchListModel } from "./watchList.model";

const addToWatchList = async (list: TWatchList) => {
  const result = await watchListModel.create(list);
  return result;
};

const getAllWatchListFromDB = async (email?: string) => {
  if (email) {
    return await watchListModel.find({ userEmail: email });
  }
};

const deleteWatchFromDb = async (_id: string) => {
  const result = await watchListModel.deleteOne({ _id });
  return result;
};

export const watchListDB = {
  addToWatchList,
  getAllWatchListFromDB,
  deleteWatchFromDb,
};
