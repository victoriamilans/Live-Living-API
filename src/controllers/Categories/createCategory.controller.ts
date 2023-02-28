import { Request, Response } from "express";
import { ICategory, ICategoryRequest } from "../../interfaces/categories";
import createCategoryService from "../../services/Categories/createCategory.service";

const createCategoryController = async (req: Request, res: Response) => {
  const category: ICategoryRequest = req.body;
  const newCategory = await createCategoryService(category);
  return res.status(201).send(newCategory);
};

export default createCategoryController;
