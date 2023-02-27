import { Request, Response } from "express";
import listCategoryService from "../../services/Categories/listCategories.service";

const listCategoriesController = async (req: Request, res: Response) => {
  const allCategories = await listCategoryService();
  return res.status(200).send(allCategories);
};

export default listCategoriesController;
