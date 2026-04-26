import mongoose, { models } from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    blog:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    message: {
      type: String,
      required: true,
      minlength: 3,
    },
  },
  { timestamps: true }
);

export const CommentModel =
  models.Comment || mongoose.model("Comment", commentSchema);
