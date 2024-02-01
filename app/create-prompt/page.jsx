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
import { db } from "@app/firebase/firestore";
import { useState } from "react";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "../../components/Form";

const CreatePrompt = () => {
  const router = useRouter();
  // const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: "", tag: "" });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    alert(post.prompt);
    alert(post.tag);

    try {
      // const addItem = async (e) => {
      //   e.preventDefault();
      if (post.prompt !== "" && post.tag !== "") {
        //setItems([...items, newItems]);
        await addDoc(collection(db, "prompts"), {
          prompt: post.prompt,
          tag: post.tag,
        });
        // setNewItems({ name: "", price: "" });
      }
      // };

      // if (response.ok) {
      //   router.push("/");
      // }
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
