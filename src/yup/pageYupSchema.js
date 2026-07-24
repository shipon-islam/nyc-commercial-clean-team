import * as yup from "yup";
export const pageYupSchema = () =>
  yup
    .object({
      pageName: yup.string().required("Page Name is required"),
      title: yup.string().required("Title is required"),
      subTitle: yup.string().required("SubTitle is required"),
      shortDescription: yup
        .string()
        .required("Short description is required")
        .min(5, "Short description must be at least 5 character"),
    })
    .required();
