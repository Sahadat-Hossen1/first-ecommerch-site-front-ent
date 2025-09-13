import React, { useContext } from "react";
import { ProductDataContext } from "../../Context/DataContext/ProductDataCom";

const Filter = () => {
  const { UnicBrandName, selectedBrand, setSelectedBrand } =
    useContext(ProductDataContext);
  const handleCheckedBrand = (brand) => {
    //   alert(brand)
    if (selectedBrand.includes(brand)) {
      // alert(brand)
      setSelectedBrand(selectedBrand.filter((b) => b !== brand));
    } else {
      setSelectedBrand([...selectedBrand, brand]);
    }
  };
  
  return (
    <div className="">
      <ul>
        {UnicBrandName.map((brand, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={selectedBrand.includes(brand)}
              onChange={() => handleCheckedBrand(brand)}
              id={`brand-${i}`}
            />
            <label htmlFor={`brand-${i}`}>{brand} </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
