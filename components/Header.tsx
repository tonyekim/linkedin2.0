import { Briefcase, HomeIcon, SearchIcon, UsersIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">
      <Image
        src="https://links.papareact.com/b3z"
        width={40}
        height={40}
        alt="logo"
        className=" rounded-lg"
      />

      <div className="flex-1">
        <form className="flex items-center space-x-1 bg-gray-100 rounded-md flex-1 mx-2 max-w-96">
          <SearchIcon className="h-4 text-gray-600 " />

          <input
            type="text"
            name=""
            id=""
            className=" bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      <div>
        <Link href="" className="icon">
          <HomeIcon className="h-5" />
          <p>Home</p>
        </Link>
        <Link href="" className="icon hidden md:flex">
          <UsersIcon className="h-5" />
          <p>Network</p>
        </Link>
        <Link href="" className="icon hidden md:flex">
          <Briefcase className="h-5" />
          <p>Jobs</p>
        </Link>
      </div>

      {/* User Button */}

      {/* Sign In Button */}
    </div>
  );
};

export default Header;
