import React, { createContext, useEffect, useState } from "react";
export const ProductDataContext = createContext({});
const ProductDataCom = ({ children }) => {
  const [Product_Data, setProduct_Data] = useState([]);
  const [After_Filter_Data, setAfter_Filter_Data] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState("");
  //for input search
  const [SearchIndex, setSearchIndex] = useState("");
  //for selected brand name and category name
  const [selectedBrand, setSelectedBrand] = useState([]);
  //fetch json
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);

        const res = await fetch("Product.json");
        if (!res.ok) throw new Error("something is worng");
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
  // for find brand name
  const UnicBrandName = [
    ...new Set(Product_Data.map((product) => product.brand)),
  ];
  //for product  filter with brand name
useEffect(()=>{
  try {
    let filtered=Product_Data;
     if(selectedBrand.length > 0){
      filtered=Product_Data.filter((product)=>{
       return selectedBrand.includes(product.brand)
      })
    }
    setAfter_Filter_Data(filtered)
    //  console.log(selectedBrand);
     
  } catch (error) {
    // setError(error.message)
    console.log(error);

    
  }
},[selectedBrand,Product_Data])
// useEffect(()=>{
//   console.log(After_Filter_Data)
// },[After_Filter_Data]);


  //for sending product to other components
  const DataInfo = {
    Product_Data,
    setProduct_Data,
    Loading,
    setLoading,
    Error,
    setError,
    UnicBrandName,
    selectedBrand,
    setSelectedBrand,
    After_Filter_Data,
  };
  return (
    <ProductDataContext.Provider value={DataInfo}>
      {children}{" "}
    </ProductDataContext.Provider>
  );
};

export default ProductDataCom;
