import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { appError } from "../../errors";
import { IUser } from "../../interfaces/users";

export const deleteUsersService = async (id: string): Promise<IUser> => {
  const userRepository = AppDataSource.getRepository(User);
  const findUser = await userRepository.findOneBy({
    id: id,
  });

  if (!findUser) {
    throw new appError("User not found", 404);
  }

  if (findUser.isActive == false) {
    throw new appError("User is already inactive", 400);
  }

  await userRepository.save({ ...findUser, isActive: false });

  return findUser;
};
