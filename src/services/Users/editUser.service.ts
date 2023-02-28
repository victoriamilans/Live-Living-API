import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { IUserResponse, IUserUpdate } from "../../interfaces/users";
import { userToReturn } from "../../serializers/user.serializer";

export const editUsersService = async (
  id: string,
  userData: IUserUpdate
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: id,
  });

  const updatedUser = userRepository.create({
    ...findUser,
    ...userData,
  });
  await userRepository.save(updatedUser);

  const userWithoutPassword = await userToReturn.validate(updatedUser, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};
