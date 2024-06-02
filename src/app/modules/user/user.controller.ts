import { Request, Response } from "express";
import { userDb } from "./user.service";

const addNewUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userDb.createAccountToDB(user);

    res.status(200).json({
      success: true,
      message: "user created successfully",
      data: result,
    });
  } catch (err) {
    res.status(200).json({
      success: false,
      message: `something went wrong`,
    });
  }
};

const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await userDb.LoginAccount(email, password);

    res.status(200).json({
      success: true,
      message: "Login successful",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
    });
  }
};

export const userController = {
  addNewUser,
  loginUser,
};
