import mongoose, { Schema } from "mongoose";

const quoteSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [3, "Full name must be at least 3 characters"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Email is invalid"],
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      minlength: [10, "Phone number must be at least 10 digits"],
      trim: true,
    },
    facilityType: {
      type: String,
      required: [true, "Facility type is required"],
      trim: true,
    },
    zipCode: {
      type: String,
      required: [true, "Zip code is required"],
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

export const QuoteModel =
  mongoose.models.Quote || mongoose.model("Quote", quoteSchema);
