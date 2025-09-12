import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Filter from "../../Components/Filter/Filter";

const Main = () => {
  return (
    <div>
      <div className="">

      <NavBar></NavBar>
      </div>
      <div className="flex">
        <div className="w-[15%] border-e  ">
        <Filter></Filter>
        </div>
        <div className="h-screen w-[80%]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
