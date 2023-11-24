import * as Yup from "yup";


export const LoginValidationSchema = Yup.object({
  primaryContact: Yup.string().trim().required('Mobile number required'),
  password: Yup.string().trim().required('Password required'),
});

export const RegisterValidationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .min(3, 'Minimum 3 Characters required')
    .max(25, 'Maximum 25 Charachers Allow')
    .required('First Name is required'),
  lastName: Yup.string().trim().required('Last Name  is required'),
  primaryContact: Yup.string().trim().required('phonenumber is required'),
  email: Yup.string()
    .email('Invalid Email Address')
    .required('Email is required'),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Must Contain 6 Characters, One Uppercase, One Lowercase and One Special Case Character',
    )
    .required('Password is required'),
  otp: Yup.string()
    .required('otp required')

});