"use client";
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
import { db } from "../firebase/firestore";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "../../components/Form";

const CreatePrompt = () => {
  const { isLoaded, isSignedIn, user } = useUser();
  console.log(user);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const router = useRouter();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // alert(post.prompt);
    // alert(post.tag);
    // alert(user.imageUrl);

    try {
      // const addItem = async (e) => {
      //   e.preventDefault();
      if (post.prompt !== "" && post.tag !== "") {
        //setItems([...items, newItems]);
        addDoc(collection(db, "prompts"), {
          prompt: post.prompt,
          tag: post.tag,
          creatorID: user.id,
          creatorName: user.fullName,
          creatorUsername: user.username,
          creatorPhotoUrl: user.imageUrl,
        });
        // setNewItems({ name: "", price: "" });
        alert("Successful");
        router.push("/");
      }
      // };
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
