import { InferType, object, string } from "yup";

export const LoginSchema = object().shape({
  email: string().required("Email is required").email(),
  password: string().required("Password is required"),
});

export type LoginSchemaType = InferType<typeof LoginSchema>;
