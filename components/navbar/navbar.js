import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 h-20 opacity-50">
      <div className="container mx-auto ">
        <div className="flex items-center justify-between text-black">
          <img
            src={"logo.png"}
            className="object-cover h-32 px-8 py-4 mr-4"
          ></img>
          <ul className="flex gap-6 px-8 mx-auto mb-6 text-xl font-bold">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/blog"}>
              <li>blog</li>
            </Link>
            <Link href={"/services"}>
              <li>services</li>
            </Link>
            <Link href={"/course"}>
              <li>course</li>
            </Link>
            <Link href={"/productlist"}>
              <li>Products</li>
            </Link>
          </ul>

          <div className="flex gap-4 mb-6 text-center ">
            <div className="w-32 px-8 py-4 mr-auto text-white rounded-full bg-blue-950">
              <button>Login</button>
            </div>
            <div className="w-32 px-8 py-4 mr-auto text-white rounded-full bg-blue-950">
              <button>SignUp</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
