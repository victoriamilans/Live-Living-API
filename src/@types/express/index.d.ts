import { IUser } from "../../interfaces/users";

declare global {
  namespace Express {
    interface Request {
      validatedBody: object;
      user: {
        id: string;
      };
    }
  }
}

export {};
