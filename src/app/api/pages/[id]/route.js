import { db_connect } from "@/database";
import { ImageModel } from "@/database/models/imageModel";
import { PageModel } from "@/database/models/pageModel";
import { deleteFile } from "@/lib/deleteFile";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function PUT(request, context) {
  const { id } = await context.params;
  const formData = await request.formData();
  const pageValues = Object.fromEntries(formData);

  try {
    await db_connect();
    // const pageData=false
    const pageData = await PageModel.findByIdAndUpdate(id, {
      ...pageValues,
      features: JSON.parse(pageValues?.features),
      stats: JSON.parse(pageValues?.stats),
      facilities: JSON.parse(pageValues?.facilities),
    });

    if (!pageData) {
      return NextResponse.json(
        { error: "Page update failed" },
        { status: 500 },
      );
    }

    const paths = ["/", "/dashboard/pages"];
    paths.forEach((p) => revalidatePath(p));
    return NextResponse.json(pageData, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "something went wrong" },
      { status: 500 },
    );
  }
}

export async function DELETE(request, context) {
  const { id } = await context.params;
  try {
    await db_connect();

    const deletePage = await PageModel.findByIdAndDelete(id);
    if (!deletePage) {
      return new NextResponse(
        { error: "Page deletion failed" },
        { status: 500 },
      );
    }
    const facilitiesImage = deletePage?.facilities?.flatMap((item) => [
      item.beforeImage,
      item.afterImage,
    ]);
    const imagesArray = [...facilitiesImage, deletePage?.bannerImage];

    for (const img of imagesArray) {
      await ImageModel.findOneAndDelete({ image: img });
      deleteFile("page", img);
    }
    return NextResponse.json(
      { message: "Page deleted successfully" },
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
