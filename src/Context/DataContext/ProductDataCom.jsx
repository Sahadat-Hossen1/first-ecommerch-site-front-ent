import React, { createContext, useEffect, useState } from "react";
export const ProductDataContext = createContext({});
const ProductDataCom = ({ children }) => {
  const [Product_Data, setProduct_Data] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState("");
  //for input search
  const[SearchIndex,setSearchIndex]=useState('')
 
  //fetch json
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await fetch("Product.json");
        if (!res.ok) throw  new Error("something is worng")
        const data = await res.json();
        setProduct_Data(data);
        // console.log(data);
      } catch (error) {
        setError(error);
        console.log(Error);
      } finally {
        setLoading(false);
        // setError(null);
      }
    };
    fetchProduct();
  }, []);
  // console.log(Product_Data);
  // for find brand name 
   const UnicBrandName= [... new Set(Product_Data.map(product=>product.brand))]
  //  console.log(UnicBrandName);
   

  //for sending product to other components
  const DataInfo = {
    Product_Data,
    setProduct_Data,
    Loading,
    setLoading,
    Error,
    setError,
    UnicBrandName,
    
  };
  return (
    <ProductDataContext.Provider value={DataInfo}>{children} </ProductDataContext.Provider>
  );
};

export default ProductDataCom;
