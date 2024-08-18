import Link from "next/link";
import React from "react";

function NewUser() {
  return (
    <div>
      <button className="btn btn-primary">
        <Link href={"/users"}>Create</Link>
      </button>
    </div>
  );
}

export default NewUser;
