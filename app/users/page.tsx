import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

async function UserPage() {
  return (
    <>
      <h1>User</h1>

      <Link href={"users/new"}>
        <button className="btn btn-accent">New User</button>
      </Link>

      <UserTable />
    </>
  );
}

export default UserPage;
