import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import { OAuthOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(OAuthOptions);
  return (
    <div className="flex flex-col">
      <div>Hello {session && <span>{session.user!.name}</span>}</div>
      <Link href={"/users"}>users</Link>
      <p className="btn btn-accent w-maxs">Add to cart</p>
    </div>
  );
}
