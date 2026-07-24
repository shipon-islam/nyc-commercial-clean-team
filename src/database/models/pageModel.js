import mongoose, { Schema } from "mongoose";

const pageSchema = new Schema(
  {
    pageName: {
      type: String,
      required: [true, "Full name is required"],
    },
    title: {
      type: String,
      required: [true, "title is required"],
    },
    subTitle: {
      type: String,
      required: [true, "SubTitle is required"],
    },
    shortDescription: {
      type: String,
      required: [true, "Short Description is required"],
    },
    features: [
      {
        id: { type: String, required: [true, "SubTitle is required"] },
        name: { type: String, required: [true, "SubTitle is required"] },
      },
    ],
    bannerImage: { type: String, required: [true, "Full name is required"] },
    stats: [
      {
        id: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        number: {
          type: String,
          required: true,
        },
        suffix: {
          type: String,
          required: true,
        },
      },
    ],
    facilities: [
      {
        id: {
          type: String,
          required: true,
        },
        title: {
          type: String,
          required: true,
        },
        beforeImage: {
          type: String,
          required: true,
        },
        afterImage: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const PageModel =
  mongoose.models.Page || mongoose.model("Page", pageSchema);
