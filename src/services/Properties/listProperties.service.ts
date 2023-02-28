import { AppDataSource } from "../../data-source";
import Properties from "../../entities/properties.entity";

const listPropertiesService = async (): Promise<Properties[]> => {
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const allProperties = await propertiesRepository.find({
    relations: {
      address: true,
    },
  });

  return allProperties;
};

export default listPropertiesService;
