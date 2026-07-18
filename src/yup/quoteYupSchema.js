import * as Yup from "yup";

export const quoteYupSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, "FullName is required") // min(1) instead of min(0) to ensure non-empty
    .required("FullName is required"),
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

  facilityType: Yup.string().required("Facility type is required"),

  zipCode: Yup.string().required("Zip code is required"),
  category: Yup.string().required("Category is required"),
});
