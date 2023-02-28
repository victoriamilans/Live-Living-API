import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest, IUserResponse, IUserUpdate } from "../interfaces/users";

export const user: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup.string().email().required("email is required"),
  password: yup.string().required("password is required"),
  isAdm: yup.boolean().required("isAdm is required"),
});

export const userToReturn: SchemaOf<IUserResponse> = yup.object().shape({
  isActive: yup.boolean().notRequired(),
  updatedAt: yup.date().notRequired(),
  createdAt: yup.date().notRequired(),
  isAdm: yup.boolean().notRequired(),
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  id: yup.string().notRequired(),
});

export const userToReturnArray = yup.array(userToReturn);

export const updateUsers: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().min(2).trim(),
  email: yup.string().trim().email(),
  password: yup.string().trim(),
});
