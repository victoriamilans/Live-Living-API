import { Router } from "express";
import createPropertyController from "../controllers/Properties/createProperty.controller";
import listPropertiesController from "../controllers/Properties/listProperties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";

const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureUserIsAdminMiddleware,
  createPropertyController
);

propertiesRoutes.get("", listPropertiesController);

export default propertiesRoutes;
