import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users";
import { editUsersService } from "../../services/Users/editUser.service";

export const editUsersController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;
  const users = await editUsersService(req.params.id, userData);
  return res.status(200).send(users);
};
