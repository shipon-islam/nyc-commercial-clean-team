import { db_connect } from "@/database";
import { QuoteModel } from "@/database/models/quoteModel";
import { NextResponse } from "next/server";

export async function DELETE(request, context) {
  const { id } = await context.params;

  try {
    await db_connect();
    const deleteQuote = await QuoteModel.findByIdAndDelete(id);
    if (!deleteQuote) {
      return new NextResponse(
        { error: "Quote deletion failed" },
        { status: 500 },
      );
    }
    return NextResponse.json(
      { message: "Quote deleted successfully" },
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

