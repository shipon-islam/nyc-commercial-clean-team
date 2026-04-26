import { db_connect } from "@/database";
import { BlogModel } from "@/database/models/blogModel";
import { CommentModel } from "@/database/models/commentModel";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { id } = await context.params;
  try {
    await db_connect();
    const comment = await CommentModel.findById(id).populate("blog");

    if (!comment) {
      return new NextResponse("Comment not found", { status: 404 });
    }

    return NextResponse.json(comment, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json("something went wrong", { status: 500 });
  }
}

export async function DELETE(request, context) {
  const { id } = await context.params;
  try {
    await db_connect();
    const comment = await CommentModel.findByIdAndDelete(id);
    if (!comment) {
      return new NextResponse(
        { error: "Comment deletion failed" },
        { status: 500 },
      );
    }
    await BlogModel.findByIdAndUpdate(comment.blog, {
      $pull: {
        comments: comment._id,
      },
    });
    const paths = ["/", "/blogs", "/blog/" + comment.blog];
    paths.forEach((p) => revalidatePath(p));

    return NextResponse.json(
      { message: "Comment deleted successfully" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 },
    );
  }
}

