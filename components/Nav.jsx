"use Client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
// import Logo from "../public/assets/icons/logo.svg";
//import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        {/* <Image src={Logo} /> */}
        <span className="font-bold text-2xl">AI Prompts</span>
      </Link>
    </nav>
  );
};

export default Nav;
