import { Router } from "express";
import createCategoryController from "../controllers/Categories/createCategory.controller";
import listCategoriesController from "../controllers/Categories/listCategories.controller";
import listCategoriesByIdController from "../controllers/Categories/listCategoryById.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";
import { category } from "../serializers/categories.serializer";

const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureUserIsAdminMiddleware,
  ensureDataIsValidMiddleware(category),
  createCategoryController
);

categoriesRoutes.get("", listCategoriesController);
categoriesRoutes.get("/:id/properties", listCategoriesByIdController);

export default categoriesRoutes;
