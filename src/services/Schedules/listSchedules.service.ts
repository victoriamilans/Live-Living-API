import { AppDataSource } from "../../data-source";
import Properties from "../../entities/properties.entity";
import { appError } from "../../errors";

const listSchedulesService = async (
  PropertyId: string
): Promise<Properties | null> => {
  const propertiesRepository = AppDataSource.getRepository(Properties);

  const verifyPropertyExist = AppDataSource.getRepository(Properties)
    .createQueryBuilder("properties")
    .where("id = :id ", { id: PropertyId })
    .getOne();

  if (!(await verifyPropertyExist)) {
    throw new appError("Schedule does not exist", 404);
  }

  const schedules = await propertiesRepository.findOne({
    relations: { schedules: true },
    where: { id: PropertyId },
  });

  return schedules;
};

export default listSchedulesService;
