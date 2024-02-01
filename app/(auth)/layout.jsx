import React from "react";

const Layout = (props) => {
  return (
    <div className="flex justify-center text-center items-center h-screen w-full bg-white">
      {props.children}
    </div>
  );
};

export default Layout;
