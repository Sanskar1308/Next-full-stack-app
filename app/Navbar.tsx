import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"admin"}>Admin</Link>
            </li>
            <li>
              <a>Items</a>
              <ul className="p-2">
                <li>
                  <Link href={"users"}>User</Link>
                </li>
                <li>
                  <Link href={"product"}>Product</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={"#"}>About</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"}>LOGO</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"admin"}>Admin</Link>
          </li>
          <li>
            <details>
              <summary>Items</summary>
              <ul className="p-2">
                <li>
                  <Link href={"users"}>User</Link>
                </li>
                <li>
                  <Link href={"product"}>Product</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link href={"/"} className="btn">
          Logout
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
