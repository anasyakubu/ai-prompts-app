import React from "react";
import Feed from "@components/Feed";
import Nav from "@components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          An Open-source AI Prompting tool for modern world to discover, create{" "}
          and sharing creative prompts{" "}
        </p>

        <Feed />
      </section>
  
    </>
  );
};

export default Home;
