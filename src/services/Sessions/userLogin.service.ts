import User from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/users";
import jwt from "jsonwebtoken";
import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import "dotenv/config";
import { appError } from "../../errors";

const userLoginService = async ({
  email,
  password,
}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    email: email,
  });

  if (!user) {
    throw new appError("Email or password incorrect", 403);
  }

  if (!user.isActive) {
    throw new appError("User is not active", 400);
  }

  if (user.password) {
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new appError("Email or password incorrect", 403);
    }
  }

  const token = jwt.sign({}, process.env.SECRET_KEY!, {
    subject: user.id,
    expiresIn: "24h",
  });
  return token;
};

export default userLoginService;
