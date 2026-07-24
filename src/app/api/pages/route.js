import { db_connect } from "@/database";
import { PageModel } from "@/database/models/pageModel";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
  const formData = await request.formData();
  const pageValues = Object.fromEntries(formData);
  // {pageName,title,subTitle,shortDescription,facilities,stats,features,bannerImage}
 const pageName=pageValues?.pageName
  try {
    await db_connect();
    // const pageData=false
    const isExistPage=await PageModel.findOne({pageName})
    if (isExistPage) {
      return NextResponse.json(
        { error: " Change Page Name, This Page is already Exist!" },
        { status: 400 },
      );
    }
    const pageData = await PageModel.create({
      ...pageValues,
      features: JSON.parse(pageValues?.features),
      stats: JSON.parse(pageValues?.stats),
      facilities: JSON.parse(pageValues?.facilities),
    });

    if (!pageData) {
      return NextResponse.json(
        { error: "Page creation failed" },
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

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = Object.fromEntries(searchParams);
  const page = Number(query?.page) || 1;
  const limit = Number(query?.limit) || 10;
  const skip = (page - 1) * limit;
  let searchQuery = {};
  if (query) {
    if (query.title) {
      searchQuery.title = query.title;
    }
  }
  try {
    await db_connect();
    const pageFilterData = await PageModel.find(searchQuery)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await PageModel.countDocuments();
    const PageData = {
      success: true,
      data: pageFilterData,
      pagination: {
        page: page,
        limit: limit,
        total: total,
        totalPages: Math.ceil(total / limit),
      },
      message: "All Page fetched successfully",
    };
    return NextResponse.json(PageData, {
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
