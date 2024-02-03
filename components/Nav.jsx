"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/images/ai-logo.svg";
import User from "../public/assets/images/user-1.jpg";
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={Logo}
          alt="logo"
          width={90}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">AI prompts</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black_btn">
            Create Post
          </Link>
          <SignedOut>
            <Link href="sign-in" className="black_btn">
              Sign in
            </Link>
          </SignedOut>
          <SignedIn>
            {" "}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <SignedIn>
            {" "}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <div className="dropdown">
            <Link
              href="/create-prompt"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Create Prompt
            </Link>
            <signOut>
              <Link
                href="sign-in"
                onClick={() => {
                  setToggleDropdown(false);
                }}
                className="mt-5 w-full black_btn"
              >
                Sign In
              </Link>
            </signOut>
          </div>
        </div>

        <Link href="/" className="black_btn ml-5">
          +
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
