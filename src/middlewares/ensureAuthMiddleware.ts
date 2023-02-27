import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { appError } from "../errors";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    throw new appError("Invalid token", 401);
  }
  token = token.split(" ")[1];
  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      throw new appError(error.message, 401);
    }
    req.user = {
      id: decoded.sub,
    };
  });
  return next();
};

export default ensureAuthMiddleware;
