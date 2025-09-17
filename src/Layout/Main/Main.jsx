import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import Filter from "../../Components/Filter/Filter";
import { ProductDataContext } from "../../Context/DataContext/ProductDataCom";

const Main = () => {
  const { Error } = useContext(ProductDataContext);
  return (
    <div>
      <div>
        <NavBar></NavBar>
        {Error && <h1>Error message is:{Error} </h1>}
      </div>
      <div className="flex">
        <div className="hidden md:block md:w-[15%] md:border-e  ">
          <Filter></Filter>
        </div>
        <div className=" w-[80%] mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
