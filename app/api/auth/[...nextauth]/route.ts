import NextAuth from "next-auth";
import { OAuthOptions } from "./OAuthOptions";

const handler = NextAuth(OAuthOptions);

export { handler as GET, handler as POST };
