"use server"

import { db_connect } from "@/database";
import { PageNameModel } from "@/database/models/pageNameModel";

export const getPageNames = async () => {
  try {
    await db_connect();
    const pageName = await PageNameModel.find()
    return JSON.parse(JSON.stringify(pageName));
    
  } catch (err) {
    console.error(err);
    throw err;
  }
};