import { AppDataSource } from "../../data-source";
import Categories from "../../entities/categories.entity";
import { appError } from "../../errors";
import { ICategoryRequest } from "../../interfaces/categories";

const listCategoryByIdService = async (
  id: string
): Promise<ICategoryRequest> => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      properties: true,
    },
  });

  if (!category) {
    throw new appError("Category Not Found", 404);
  }

  const listToReturn = {
    name: category.name,
    id: category.id,
    properties: category.properties,
  };

  return category;
};

export default listCategoryByIdService;
