import { AppDataSource } from "../../data-source";
import Properties from "../../entities/properties.entity";
import { IPropertyRequest } from "../../interfaces/properties";

const listPropertiesService = async (): Promise<any> => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const allProperties = await propertiesRepository.find();

  return allProperties;
};

export default listPropertiesService;
