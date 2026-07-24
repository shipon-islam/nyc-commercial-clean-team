import mongoose, { models } from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);
export const ImageModel = models.Image || mongoose.model("Image", imageSchema);
