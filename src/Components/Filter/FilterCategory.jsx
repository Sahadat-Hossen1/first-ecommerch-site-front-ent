import React, { useContext } from "react";
import { ProductDataContext } from "../../Context/DataContext/ProductDataCom";

const FilterCategory = () => {
  const { unicCategrory, SelectedCategory, setSelectedCategory } =
    useContext(ProductDataContext);
    const handleCheckedCategory=(category)=>{
        if(SelectedCategory.includes(category)){
           return   setSelectedCategory(SelectedCategory.filter((c)=> c !==category))
        }else{
            setSelectedCategory([ ...SelectedCategory,category])
        }
    }

  return (
    <div>
      <ul
        className='overflow-hidden '
      >
        <h1 className="text-primary font-bold">Category:</h1>
        {unicCategrory.map((category, i) => (
          <li key={i} className="flex gap-2">
            <input
              type="checkbox"
              checked={SelectedCategory.includes(category)}
              onChange={() => handleCheckedCategory(category)}
              id={`category-${i}`}
            />
            <label htmlFor={`category-${i}`}>{category} </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilterCategory;
