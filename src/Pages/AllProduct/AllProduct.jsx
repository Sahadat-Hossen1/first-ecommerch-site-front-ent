import React, { useContext } from "react";
import { ProductDataContext } from "../../Context/DataContext/ProductDataCom";

const AllProduct = () => {
  const { After_Filter_Data, Loading, Error } = useContext(ProductDataContext);
 
  return (
    <div className="flex mx-auto">
      {Loading && <h1 className="text-red-500 text-center">Loading.....</h1>}
      {Error && (
        <h1 className="text-red-700 text-center">Error message is:{Error} </h1>
      )}
      <div className=" grid grid-cols-1  md:grid-cols-3  mx-auto gap-2  py-2 ">
        {" "}
        {After_Filter_Data.map((product, i) => (
          // <div
          //   key={i}
          //   className="card w-[350px] md:w-72 bg-white shadow-lg rounded-2xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
          // >
          //   <figure className="px-4 pt-4">
          //     <img
          //       src={product.image}
          //       alt={product.title}
          //       className="rounded-xl h-48 w-full object-cover"
          //     />
          //   </figure>

          //   <div className="card-body items-center text-center space-y-3">
          //     <h2 className="card-title text-lg font-semibold text-gray-800">
          //       {product.title}
          //     </h2>
          //     <p className="text-gray-600 text-sm">
          //       {product.description?.slice(0, 60)}...
          //     </p>

          //     <div className="card-actions justify-center mt-2">
          //       <button className="btn btn-primary px-6 py-2 rounded-full hover:scale-105 transition-transform duration-200">
          //         Buy Now
          //       </button>
          //     </div>
          //   </div>
          // </div>
          <div className="card bg-base-100 sm:w-40 md:w-64 lg:w-72 xl:80 shadow-sm sm:px-2" key={i}>
            <figure>
              <img
                src={product?.image}
                alt={product.brand}
                className="w-full h-40"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg">{product.model} </h2>
              <p className="text-xsm ">
    {product.title}
              </p>
              <p>Price:{product.price}৳ </p>
              <p>Brand:{product.brand}, Category: <span>{product.category} </span> </p>
              <div className="card-actions justify-end">
                <button className="bg-amber-100 text-primary hover:bg-primary hover:text-amber-100 px-3 py-1 rounded-2xl transition-all delay-150">Add to Card</button>
              </div>
            </div>
          </div>

          //   <div
          //     key={i}
          //     className="card w-[350px] md:w-72 bg-blue-200 "
          //   >
          //     <figure className="">
          //       <img src={product.image} alt="Shoes" className="rounded-xl" />
          //     </figure>
          //     <div className="card-body items-center text-center">
          //       <h2 className="card-title">Card Title</h2>
          //       <p>
          //         A card component has a figure, a body part, and inside body
          //         there are title and actions parts
          //       </p>
          //       <div className="card-actions">
          //         <button className="btn btn-primary">Buy Now</button>
          //       </div>
          //     </div>
          //   </div>
        ))}
      </div>
      
    </div>
  );
};

export default AllProduct;
