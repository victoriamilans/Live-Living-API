import { Request, Response } from "express";
import listPropertiesService from "../../services/Properties/listProperties.service";

const listPropertiesController = async (req: Request, res: Response) => {
  const allProperties = await listPropertiesService();
  return res.status(200).send(allProperties);
};

export default listPropertiesController;
