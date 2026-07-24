import mongoose, { Schema } from "mongoose";

const pageNameSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Page name is required"],
      trim: true,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

// Generate slug from name
pageNameSchema.pre("validate", function () {
  if (this.name) {
    this.slug = this.name
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }
});

export const PageNameModel =
  mongoose.models.PageName ||
  mongoose.model("PageName", pageNameSchema);