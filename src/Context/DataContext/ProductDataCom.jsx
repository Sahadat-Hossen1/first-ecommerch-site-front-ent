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
  //for selecet category
  const [SelectedCategory, setSelectedCategory] = useState([]);
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
  //for find all unic category name
  const unicCategrory = [
    ...new Set(Product_Data.map((product) => product.category)),
  ];
  //for filter with unic color
  const unicColor = [...new Set(Product_Data.map((product) => product.color))];
  console.log(unicColor);

  //for product  filter with brand name
  useEffect(() => {
    try {
      let filtered = Product_Data;
      if (selectedBrand.length > 0) {
        filtered = Product_Data.filter((product) => {
          return selectedBrand.includes(product.brand);
        });
      }
      if (SelectedCategory.length > 0) {
        filtered = filtered.filter((product) => {
          return SelectedCategory.includes(product.category);
        });
      }
      setAfter_Filter_Data(filtered);
      //  console.log(selectedBrand);
    } catch (error) {
      // setError(error.message)
      console.log(error);
    }
  }, [selectedBrand, SelectedCategory, Product_Data]);
  useEffect(() => {
    console.log(After_Filter_Data);
  }, [After_Filter_Data]);

  //for sending product to other components
  const DataInfo = {
    Product_Data,
    setProduct_Data,
    Loading,
    setLoading,
    Error,
    setError,
    After_Filter_Data,
    UnicBrandName,
    selectedBrand,
    setSelectedBrand,
    unicCategrory,
    SelectedCategory,
    setSelectedCategory,
  };
  return (
    <ProductDataContext.Provider value={DataInfo}>
      {children}{" "}
    </ProductDataContext.Provider>
  );
};

export default ProductDataCom;
