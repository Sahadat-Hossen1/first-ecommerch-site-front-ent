import React, { createContext, useEffect, useState } from "react";
export const ProductData = createContext({});
const ProductDataCom = ({ children }) => {
  const [Product_Data, setProduct_Data] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);
  const[SearchIndex,setSearchIndex]=useState('')
  //fetch json
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await fetch("Product.json");
        const data = await res.json();
        setProduct_Data(data);
        // console.log(data);
      } catch (error) {
        setError(error.message);
        console.log(Error);
      } finally {
        setLoading(false);
        setError(null);
      }
    };
    fetchProduct();
  }, []);

  //for sending product to other components
  const DataInfo = {
    Product_Data,
    setProduct_Data,
    Loading,
    setLoading,
    Error,
    setError,
  };
  return (
    <ProductData.Provider value={DataInfo}>{children} </ProductData.Provider>
  );
};

export default ProductDataCom;
