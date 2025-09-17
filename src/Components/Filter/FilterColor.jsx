import React, { useContext, useState } from 'react';
import { ProductDataContext } from '../../Context/DataContext/ProductDataCom';

const FilterColor = () => {
    const {unicColor,setSelectedColor,SelectedColor}=useContext(ProductDataContext)
      const [showAll, setShowAll] = useState(false);
      //for show only 5 color name and for more and less button
      const showHidden = showAll ? unicColor : unicColor.slice(0, 5);
    
      const handleCheckedcolor = (color) => {
        //   alert(color)
        if (SelectedColor.includes(color)) {
          // alert(color)
          setSelectedColor(SelectedColor.filter((c) => c !== color));
        } else {
          setSelectedColor([...SelectedColor, color]);
        }
      };
    return (
      <div className="scroll-smooth">
      {/* for show all color name */}
      <div>
        <ul
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showAll ? "max-h-[1000px]" : "max-h-32"
          }`}
        >
          <h1 className="text-primary font-bold">Color:</h1>
          {showHidden.map((color, i) => (
            <li key={i} className="flex gap-2">
              <input
                type="checkbox"
                checked={SelectedColor.includes(color)}
                onChange={() => handleCheckedcolor(color)}
                id={`color-${i}`}
              />
              <label htmlFor={`color-${i}`}>{color} </label>
            </li>
          ))}
        </ul>
        {/* after color name for show and hidden button */}
        <div className="flex justify-end px-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-2 py-1 bg-amber-300 rounded-2xl hover:bg-amber-400 transition-colors"
          >
            {showAll ? "Less" : "More"}
          </button>
        </div>
      </div>
    </div>
    );
};

export default FilterColor;