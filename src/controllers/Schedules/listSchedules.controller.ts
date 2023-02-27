import { Request, Response } from "express";
import listSchedulesService from "../../services/Schedules/listSchedules.service";

const listSchedulesController = async (req: Request, res: Response) => {
  const PropertyId: string = req.params.id;
  const schedules = await listSchedulesService(PropertyId);
  return res.status(200).send(schedules);
};

export default listSchedulesController;
