import * as Yup from "yup";
export const commentYupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is required") // min(1) instead of min(0) to ensure non-empty
    .required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  message: Yup.string()
    .min(2, "Message must be at least 2 characters")
    .required("Message is required"),
});
