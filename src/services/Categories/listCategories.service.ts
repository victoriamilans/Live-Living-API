import { AppDataSource } from "../../data-source";
import Categories from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

const listCategoryService = async (): Promise<ICategoryRequest[]> => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const allCategories = await categoryRepository.find();

  return allCategories;
};

export default listCategoryService;
