"use client";

import { useState, useEffect } from "react";
import React from "react";
import PromptCardList from "./PropmptCard";

// ... (previous imports)

const Feeds = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  // const fetchPosts = async () => {
  //   const q = query(collection(db, "prompts"));
  //   const querySnapshot = await getDocs(q);

  //   const data = querySnapshot.docs.map((doc) => ({
  //     ...doc.data(),
  //     _id: doc.id,
  //   }));

  //   setAllPosts(data);
  // };

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");

    return allPosts.filter(
      (item) =>
        regex.test(item.creatorName) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {/* All Prompts */}
      {searchText ? (
        <PromptCardList data={searchedResults} />
      ) : (
        <PromptCardList data={allPosts} />
      )}
    </section>
  );
};

export default Feeds;
