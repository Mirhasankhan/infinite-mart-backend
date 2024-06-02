import { TUser } from "./user.interface";
import { userModel } from "./user.model";

const createAccountToDB = async (user: TUser) => {
  const result = await userModel.create(user);
  return result;
};

const LoginAccount = async (email: any, password: string) => {
  const user = await userModel.findOne({ email });
  if (!user) {
    throw new Error("User not found");
  }

  if (user.password !== password) {
    throw new Error("Invalid password");
  }

  return user;
};

export const userDb = {
  createAccountToDB,
  LoginAccount,
};
