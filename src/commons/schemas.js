import * as Yup from "yup";


export const LoginValidationSchema = Yup.object({
    primaryContact: Yup.string().trim().required('Mobile number is required'),
    password: Yup.string().trim().required('Password required'),
  });