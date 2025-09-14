import React, { useContext } from "react";
import { ProductDataContext } from "../../Context/DataContext/ProductDataCom";

const FilterPrice = () => {
  const { minPirce, setMinPrice, maxPrice, setMaxprice } =
    useContext(ProductDataContext);
  console.log(`minprice:${minPirce} && max:${maxPrice}`);

  return (
    <div className="p-2">
      <h1 className="text-primary font-bold">Price</h1>
      <div className="flex flex-col gap-2">
        <label>
          minimum price:<br/>
          <input
            type="number"
            value={minPirce}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="border px-1 py-1 rounded-2xl w-36"
          />
        </label>
        <label htmlFor="">
          MaxPrice:
          <input
            type="number"
            value={maxPrice}
            onChange={(e) =>setMaxprice(Number(e.target.value))}
            className="border px-1 py-1 rounded-2xl w-36"
          />
        </label>
      </div>
    </div>
  );
};

export default FilterPrice;
