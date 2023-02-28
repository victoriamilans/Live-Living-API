import { Request, Response } from "express";
import { deleteUsersService } from "../../services/Users/deleteUser.service";

export const deleteUsersController = async (req: Request, res: Response) => {
  const user = await deleteUsersService(req.params.id);
  return res.status(204).send(user);
};
