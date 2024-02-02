"use client";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";

export default function Example() {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div>
      Hello, {user.firstName} {user.lastName} {user.username} welcome to Clerk
      <div className="">
        {/* <Image
          src={user.imageUrl}
          alt={user.username}
          width={50}
          height={50}
          className="rounded-full"
        /> */}
        {user.imageUrl && (
          <img
            src={user.imageUrl}
            alt={user.username}
            className="avatar rounded full"
          />
        )}
      </div>
    </div>
  );
}
