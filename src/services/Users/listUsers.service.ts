import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { IUserResponse } from "../../interfaces/users";
import { userToReturnArray } from "../../serializers/user.serializer";

export const listUsersService = async (): Promise<
  IUserResponse[] | undefined
> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find({ withDeleted: true });
  const userWithoutPassword = await userToReturnArray.validate(users, {
    stripUnknown: true,
  });

  return userWithoutPassword;
};
