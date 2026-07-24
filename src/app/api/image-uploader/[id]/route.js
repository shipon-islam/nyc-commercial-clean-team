import { db_connect } from "@/database";
import { ImageModel } from "@/database/models/imageModel";
import { deleteFile } from "@/lib/deleteFile";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { id } = await context.params;

  try {
    await db_connect();
    const image = await ImageModel.findById(id);

    if (!image) {
      return new NextResponse("image not found", { status: 404 });
    }

    return NextResponse.json(image, {
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
    const deleteImage = await ImageModel.findByIdAndDelete(id);
    if (!deleteImage) {
      return new NextResponse(
        { error: "Image deletion failed" },
        { status: 500 },
      );
    }
    deleteFile("page", deleteImage.image);
    const paths = ["/", "/*"];
    paths.forEach((p) => revalidatePath(p));
    return NextResponse.json(
      { message: "image deleted successfully" },
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
