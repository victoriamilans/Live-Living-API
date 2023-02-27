import { Request, Response, NextFunction } from "express";

const validateSchemaMiddleware =
  (serializer: any) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validated = await serializer.validade(req.body, {
        stipUnknow: true,
        abortEarly: true,
      });
      req.validatedBody = validated;
      return next();
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

export default validateSchemaMiddleware;
