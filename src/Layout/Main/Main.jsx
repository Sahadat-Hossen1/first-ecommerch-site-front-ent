import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-[15%]">jgj</div>
        <div className="h-screen w-[80%]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
