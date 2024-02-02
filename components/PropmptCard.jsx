"use client";

// import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  querySnapshot,
  query,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../app/firebase/firestore";

// ... (previous imports)

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  // ...
  const [prompts, setPrompts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "prompts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let promptArr = [];

      querySnapshot.forEach((doc) => {
        promptArr.push({ ...doc.data(), id: doc.id });
      });

      setPrompts(promptArr);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      {prompts.map((prompt, id) => (
        // ... (rest of your code remains unchanged)
        <div className="prompt_card">
          <div className="flex justify-between items-start gap-5">
            <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
              <Image
                src=""
                alt="user_image"
                width={40}
                height={40}
                className="rounded-full object-contain"
              />

              <div className="flex flex-col">
                <h3 className="font-satoshi font-semibold text-gray-900">
                  {prompt.creatorName}
                </h3>
                <p className="font-inter text-sm text-gray-500">
                  {prompt.creatorEmail}
                </p>
              </div>
            </div>

            <div className="copy_btn">
              <Image
                src="/assets/icons/tick.svg"
                alt="tick_icon"
                width={12}
                height={12}
              />
            </div>
          </div>

          <p className="my-4 font-satoshi text-sm text-gray-700">
            {prompt.prompt}
          </p>
          <p
            className="font-inter text-sm blue_gradient cursor-pointer"
            onClick={() => handleTagClick && handleTagClick(post.tag)}
          >
            {prompt.tag}
          </p>

          <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
            <p
              className="font-inter text-sm green_gradient cursor-pointer"
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PromptCard;
