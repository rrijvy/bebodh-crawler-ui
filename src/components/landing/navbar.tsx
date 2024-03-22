import Link from "next/link";
import React from "react";

export const Navbar = () => {
  const navigation = ["Product", "Features", "Pricing", "Company", "Blog"];

  return (
    <div className="w-full">
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation.map((menu, index) => (
              <li className="nav__item mr-3" key={index}>
                <Link
                  href="/"
                  className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-800 no-underline hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-200 dark:focus:bg-gray-800"
                >
                  {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__item mr-3 hidden space-x-4 lg:flex">
          <Link href="/auth/login" className="rounded-md bg-indigo-600 px-6 py-2 text-white md:ml-5">
            Sign In
          </Link>
        </div>
      </nav>
    </div>
  );
};
