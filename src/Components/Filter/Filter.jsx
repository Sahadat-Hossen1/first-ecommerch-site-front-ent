import React, { useContext, useState } from "react";
import { ProductDataContext } from "../../Context/DataContext/ProductDataCom";

const Filter = () => {
  const { UnicBrandName, selectedBrand, setSelectedBrand } =
    useContext(ProductDataContext);
  const [showAll, setShowAll] = useState(false);
  //for show only 5 brand name and for more and less button
  const showHidden = showAll ? UnicBrandName : UnicBrandName.slice(2, 7);
  console.log(showHidden);

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
    <div className="scroll-smooth">
      <ul
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          showAll ? "max-h-[1000px]" : "max-h-32"
        }`}
      >
        {showHidden.map((brand, i) => (
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
      {/* after brand name for show and hidden button */}
      <div className="flex justify-end px-2">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-2 py-1 bg-amber-300 rounded-2xl hover:bg-amber-400 transition-colors"
        >
          {showAll ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default Filter;
