import { Request, Response } from "express";
import { listUsersService } from "../../services/Users/listUsers.service";

export const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();
  return res.status(200).json(users);
};
