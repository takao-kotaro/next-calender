import { NextRequestHandler } from "@zenstackhq/server/next";
import { enhance } from "@zenstackhq/runtime";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerAuthSession } from "../auth/authOptions";
import { prisma } from "@/prisma/prisma";

async function getPrisma(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerAuthSession({ req, res });
  // create a wrapper of Prisma client that enforces access policy,
  // data validation, and @password, @omit behaviors
  return enhance(prisma, { user: session?.user });
}

export default NextRequestHandler({ getPrisma });
