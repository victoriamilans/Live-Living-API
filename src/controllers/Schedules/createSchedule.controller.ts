import { Request, Response } from "express";
import { IScheduleRequest } from "../../interfaces/schedules";
import createScheduleService from "../../services/Schedules/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  const schedule: IScheduleRequest = req.body;
  const userId: string = req.params.id;
  const newSchedule = await createScheduleService(schedule, userId);
  return res.status(201).send(newSchedule);
};

export default createScheduleController;
