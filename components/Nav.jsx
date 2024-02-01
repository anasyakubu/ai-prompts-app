"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../public/assets/images/ai-logo.svg";

const Nav = () => {
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
          <Link href="/profile">
            <Image
              src={Logo}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
          </Link>
        </div>
        <button type="button" className="black_btn" style={{ display: "none" }}>
          Sign in
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src={Logo}
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setToggleDropdown(!toggleDropdown)}
          />
          <div className="dropdown">
            <Link
              href="/create-prompt"
              className="dropdown_link"
              onClick={() => setToggleDropdown(false)}
            >
              Create Prompt
            </Link>
            {/* <button
              type="button"
              onClick={() => {
                setToggleDropdown(false);
                signOut();
              }}
              className="mt-5 w-full black_btn"
            >
              Sign Out
            </button> */}
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            signIn(provider.id);
          }}
          className="black_btn"
        >
          +
        </button>
      </div>
    </nav>
  );
};

export default Nav;
