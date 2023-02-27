import { Router } from "express";
import createUserController from "../controllers/Users/createUser.controller";
import { deleteUsersController } from "../controllers/Users/deleteUser.controller";
import { editUsersController } from "../controllers/Users/editUser.controller";
import { listUsersController } from "../controllers/Users/listUsers.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureUserExistsMiddleware from "../middlewares/ensureUserExists.middleware";
import ensureUserIsAdminMiddleware from "../middlewares/ensureUserIsAdmin.middleware";
import validateEditUserSchemaMiddleware from "../middlewares/validatedEditUserSchema.middleware";
import { updateUsers, user } from "../serializers/user.serializers";

const userRoutes = Router();

userRoutes.post("", ensureDataIsValidMiddleware(user), createUserController);
userRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureUserIsAdminMiddleware,
  listUsersController
);
userRoutes.patch(
  "/:id",

  ensureAuthMiddleware,
  validateEditUserSchemaMiddleware(),
  ensureDataIsValidMiddleware(updateUsers),
  ensureUserExistsMiddleware,
  editUsersController
);

userRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureUserIsAdminMiddleware,
  deleteUsersController
);
export default userRoutes;
