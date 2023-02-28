import { AppDataSource } from "../../data-source";
import { appError } from "../../errors";
import { IPropertyRequest } from "../../interfaces/properties";
import Properties from "../../entities/properties.entity";
import Categories from "../../entities/categories.entity";
import Addresses from "../../entities/adresses.entity";

const createPropertyService = async ({
  size,
  value,
  address,
  categoryId,
}: IPropertyRequest) => {
  const addressesRepository = AppDataSource.getRepository(Addresses);
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const categoriesRepository = AppDataSource.getRepository(Categories);

  const verifiCategoryExists = await categoriesRepository.findOneBy({
    id: categoryId,
  });

  const verifyPropertyExists = await propertiesRepository.findOneBy({
    size: size,
    value: value,
    address: address,
  });

  if (verifyPropertyExists) {
    throw new appError("Category alredy exists", 409);
  }

  if (!verifiCategoryExists) {
    throw new appError("Category does not exist", 404);
  }

  if (address.zipCode.length != 8) {
    throw new appError("Invalid zipcode", 400);
  }

  if (address.state.length != 2) {
    throw new appError("Invalid state", 400);
  }

  const newAddress = addressesRepository.create(address);
  await addressesRepository.save(newAddress);

  const newProperty = propertiesRepository.create({
    size,
    value,
    address: newAddress,
    category: verifiCategoryExists,
  });
  await propertiesRepository.save(newProperty);

  return newProperty;
};

export default createPropertyService;
