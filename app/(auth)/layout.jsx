import React from "react";

const Layout = (props) => {
  return (
    <div className="flex justify-center text-center items-center w-full">
      {props.children}
    </div>
  );
};

export default Layout;
