import { Request, Response, NextFunction } from "express";
import { appError } from "../errors";

const validateEditUserSchemaMiddleware =
  () => (req: Request, res: Response, next: NextFunction) => {
    if (
      req.body.isAdm !== undefined ||
      req.body.isActive !== undefined ||
      req.body.id !== undefined
    ) {
      throw new appError("Unauthorized", 401);
    }

    return next();
  };

export default validateEditUserSchemaMiddleware;
