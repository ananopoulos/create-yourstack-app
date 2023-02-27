import React from "react";
import Link from "next/link";
import { constants } from "../../../utils/constants.js";

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-[10000]">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center h-10">
        <Link className="font-bold text-md" href="/" prefetch={false}>
          {constants.companyName}
        </Link>
        <div className="block">
          <ul className="inline-flex justify-end">
            <li>
              <Link className="font-bold" href="/" prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="pl-4 hover:text-gray-800"
                href="/blog"
                prefetch={false}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
