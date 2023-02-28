import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import User from "../entities/user.entity";
import { appError } from "../errors";

const ensureUserExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);
  const verifyUserAdmin = await userRepository.findOneBy({ id: req.user.id });
  const verifyUser = await userRepository.findOneBy({ id: req.params.id });
  if (!verifyUser) {
    throw new appError("User not found", 404);
  }

  if (req.params.id !== req.user.id && !verifyUserAdmin?.isAdm) {
    throw new appError("You do not have permission", 401);
  }

  return next();
};

export default ensureUserExistsMiddleware;
