import { db_connect } from "@/database";
import { PageNameModel } from "@/database/models/pageNameModel";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get("name");
  try {
    await db_connect();
    const pageName = await PageNameModel.create({ name: name });

    if (!pageName) {
      return NextResponse.json(
        { error: "Page name creation failed" },
        { status: 500 },
      );
    }

    const paths = ["/", "/dashboard/pages"];
    paths.forEach((p) => revalidatePath(p));
    return NextResponse.json(pageName, {
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

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = Object.fromEntries(searchParams);
  const page = Number(query?.page) || 1;
  const limit = Number(query?.limit) || 10;
  const skip = (page - 1) * limit;
  let searchQuery = {};
  if (query) {
    if (query.name) {
      searchQuery.name = query.name;
    }
  }
  try {
    await db_connect();
    const pageNames = await PageNameModel.find(searchQuery)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await PageNameModel.countDocuments();
    const PageNameData = {
      success: true,
      data: pageNames,
      pagination: {
        page: page,
        limit: limit,
        total: total,
        totalPages: Math.ceil(total / limit),
      },
      message: "All Page name fetched successfully",
    };
    return NextResponse.json(PageNameData, {
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
