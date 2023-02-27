import { Request, Response } from "express";
import listCategoryByIdService from "../../services/Categories/listCategoryById.service";

const listCategoriesByIdController = async (req: Request, res: Response) => {
  const category = await listCategoryByIdService(req.params.id);
  return res.status(200).send(category);
};

export default listCategoriesByIdController;
