import { PrismaClient } from "@prisma/client";

export const prisma =  new PrismaClient()

prisma.$connect().then((value)=> console.log("connected sucessfully")).catch((err)=> console.log(err));
