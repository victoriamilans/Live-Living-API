import { AppDataSource } from "../../data-source";
import Properties from "../../entities/properties.entity";
import SchedulesUsersProperties from "../../entities/scheduleUserProperties.entity";
import User from "../../entities/user.entity";
import { appError } from "../../errors";
import { IScheduleRequest } from "../../interfaces/schedules";

const createScheduleService = async (
  { date, hour, propertyId }: IScheduleRequest,
  userId: string
): Promise<Object> => {
  const userRepository = AppDataSource.getRepository(User);
  const propertiesRepository = AppDataSource.getRepository(Properties);
  const schedulesRepository = AppDataSource.getTreeRepository(
    SchedulesUsersProperties
  );

  const verifyuserExist = await userRepository.findOneBy({
    id: userId,
  });

  if (!verifyuserExist) {
    throw new appError("User not found", 401);
  }

  const verifyPropertyExist = await propertiesRepository.findOneBy({
    id: propertyId,
  });

  if (!verifyPropertyExist) {
    throw new appError("Property does not exists", 404);
  }

  const verifyScheduleExist = await schedulesRepository.findOneBy({
    date,
    hour,
  });

  if (verifyScheduleExist) {
    throw new appError("Schedule already exists", 409);
  }

  const verifyHour = hour.split(":");

  if (+verifyHour[0] >= 18 || +verifyHour[0] <= 8) {
    throw new appError("Invalid hour", 400);
  }

  const scheduling = new Date(date).getDay();

  if (scheduling == 6 || scheduling == 0) {
    throw new appError("Invalid date", 400);
  }

  await AppDataSource.createQueryBuilder()
    .insert()
    .into(SchedulesUsersProperties)
    .values({
      date,
      hour,
      properties: verifyPropertyExist,
      user: verifyuserExist,
    })
    .execute();

  return { message: "Schedule created" };
};

export default createScheduleService;
