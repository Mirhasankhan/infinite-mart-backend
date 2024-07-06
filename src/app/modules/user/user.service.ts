import { Address, TUser } from "./user.interface";
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

const updateUserFromDB = async (_id: string, updateData: any) => {
  const { city, province, street, phone, image } = updateData;

  const result = await userModel.findByIdAndUpdate(
    _id,
    {
      $set: {
        "address.city": city,
        "address.province": province,
        "address.street": street,
        phone: phone,
        image: image,
      },
    },
    { new: true }
  );

  return result;
};

const getCurrentUser = async (email: string) => {
  const result = await userModel.findOne({ email });
  return result;
};

export const userDb = {
  createAccountToDB,
  LoginAccount,
  updateUserFromDB,
  getCurrentUser,
};
