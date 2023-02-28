import { Request, Response, NextFunction } from "express";
import { AppDataSource } from "../data-source";
import User from "../entities/user.entity";
import { appError } from "../errors";

const ensureUserIsAdminMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  const userRepository = AppDataSource.getRepository(User);

  const verifyUser = await userRepository.findOneBy({ id: req.user.id });
  if (!verifyUser?.isAdm) {
    throw new appError("Missing admin authorization", 403);
  }

  return next();
};

export default ensureUserIsAdminMiddleware;
