import * as Yup from "yup";

export const DashboardFormValidationSchema = Yup.object().shape({
  title: Yup.string().required(),
  description: Yup.string().required(),
});
