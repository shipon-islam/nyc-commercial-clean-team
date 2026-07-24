import { db_connect } from "@/database";
import { PageNameModel } from "@/database/models/pageNameModel";
import { NextResponse } from "next/server";

export async function DELETE(request, context) {
  const { id } = await context.params;

  try {
    await db_connect();
    const deletePageName = await PageNameModel.findByIdAndDelete(id);
    if (!deletePageName) {
      return new NextResponse(
        { error: "Page Name deletion failed" },
        { status: 500 },
      );
    }
    return NextResponse.json(
      { message: "Page Name deleted successfully" },
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

