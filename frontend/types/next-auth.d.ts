// https://github.com/nextauthjs/next-auth/discussions/536#discussioncomment-1932922
import type { DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}
