import { Request, Response } from "express";
import { IPropertyRequest } from "../../interfaces/properties";
import createPropertyService from "../../services/Properties/createProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
  const dadosPropertie: IPropertyRequest = req.body;
  const createCategory = await createPropertyService(dadosPropertie);
  return res.status(201).json(createCategory);
};

export default createPropertyController;
