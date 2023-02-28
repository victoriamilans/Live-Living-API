import { IUserRequest, IUserResponse } from "../../interfaces/users";
import { AppDataSource } from "../../data-source";
import User from "../../entities/user.entity";
import { userToReturn } from "../../serializers/user.serializer";
import { appError } from "../../errors";

const createUserService = async (
  userData: IUserRequest
): Promise<IUserResponse> => {
  const userRepository = AppDataSource.getRepository(User);

  const emailAlredyExist = await userRepository.findOneBy({
    email: userData.email,
  });

  if (!emailAlredyExist) {
    const user = userRepository.create(userData);
    await userRepository.save(user);
    const userWithoutPassword = await userToReturn.validate(user, {
      stripUnknown: true,
    });

    return userWithoutPassword;
  }

  throw new appError("Email already exists", 409);
};

export default createUserService;
