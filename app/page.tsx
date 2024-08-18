import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>Hello World</div>
      <Link href={"/users"}>users</Link>
      <p className="btn btn-accent w-maxs">Add to cart</p>
    </div>
  );
}
