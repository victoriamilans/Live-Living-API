import { AppDataSource } from "../../data-source";
import Categories from "../../entities/categories.entity";
import { appError } from "../../errors";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (
  category: ICategoryRequest
): Promise<ICategoryRequest> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const categoryAlredyExist = await categoryRepository.findOneBy({
    name: category.name,
  });

  if (categoryAlredyExist) {
    throw new appError("Category already exists", 409);
  }

  const createCategory = categoryRepository.create(category);
  await categoryRepository.save(createCategory);

  return createCategory;
};

export default createCategoryService;
