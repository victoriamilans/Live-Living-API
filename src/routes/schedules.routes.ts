import { Router } from "express";
import createScheduleController from "../controllers/Schedules/createSchedule.controller";
import listSchedulesController from "../controllers/Schedules/listSchedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";

const schedulesRoutes = Router();

schedulesRoutes.post("", ensureAuthMiddleware, createScheduleController);

schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureUserIsAdminMiddleware,
  listSchedulesController
);

export default schedulesRoutes;
