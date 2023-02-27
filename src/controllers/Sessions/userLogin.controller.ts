import { Request, Response } from "express";
import { IUserLogin } from "../../interfaces/users";
import userLoginService from "../../services/Sessions/userLogin.service";

const userLoginController = async (req: Request, res: Response) => {
  const userData: IUserLogin = req.body;
  const token = await userLoginService(userData);
  return res.status(200).json({ token });
};

export default userLoginController;
