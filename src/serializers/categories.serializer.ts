import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICategoryRequest } from "../interfaces/categories";

export const category: SchemaOf<ICategoryRequest> = yup.object().shape({
  name: yup.string().required("Nome é obrigatóirio"),
});
