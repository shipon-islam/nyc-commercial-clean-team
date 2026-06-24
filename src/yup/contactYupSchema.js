import * as Yup from "yup";
const SUPPORTED_FORMATS = ["application/pdf", "image/jpeg", "image/jpg"];
export const contactYupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name is required") // min(1) instead of min(0) to ensure non-empty
    .required("Name is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  phone: Yup.string()
    .transform((value) => value?.replace(/\D/g, "") || "")
    .test("is-valid-us-phone", "Enter a valid USA phone number", (value) => {
      if (!value) return false;
  
      if (value.length === 11 && value.startsWith("1")) {
        value = value.slice(1);
      }
  
      if (value.length !== 10) return false;
  
      return /^[2-9]\d{2}[2-9]\d{6}$/.test(value);
    })
    .required("Phone number is required"),
  subject: Yup.string()
    .min(5, "Subject must be at least 5 characters")
    .required("Subject is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});
