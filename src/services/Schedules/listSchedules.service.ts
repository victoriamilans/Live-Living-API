import _ from "lodash";
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
    throw new appError("Property not found", 404);
  }

  let schedules = await propertiesRepository.findOne({
    relations: { schedules: true },
    where: { id: PropertyId },
  });

  if (schedules) {
    schedules.schedules[0].user = _.omit(
      schedules?.schedules[0].user,
      "password"
    );
  }

  return schedules;
};

export default listSchedulesService;
