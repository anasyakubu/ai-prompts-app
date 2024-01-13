"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Logo from "../public/assets/images/ai-logo.svg";
import Profile from "../public/assets/images/user-1.jpg";
import { set } from "mongoose";
import Provider from "./Provider";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setProviders();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src={Logo}
          alt="Logo"
          width={60}
          height={60}
          className="object-contain"
        />
        <p className="logo_text">AI Prompts</p>
      </Link>
      {/* DESKTOP NAV */}
      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="create-prompt" className="black_btn">
              Create Post{" "}
            </Link>
            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>
            <Link href="/profile">
              <Image
                src={Profile}
                width={37}
                height={37}
                className="rounded-full"
                alt="Profile"
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((Provider) => (
                <button
                  type="button"
                  key={Provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* MOBILE NAV */}
      <div className="sm:hidden flex relative ">
        {isUserLoggedIn ? (
          <div className="flex">
            <Image
              src={Logo}
              width={37}
              height={37}
              className="rounded-full"
              alt="Profile"
              onClick={() => setToggleDropdown((prev) => !prev)}
            />
            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompts"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompts
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((Provider) => (
                <button
                  type="button"
                  key={Provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
