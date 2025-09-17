import React, { createContext, useEffect, useState } from "react";
export const ProductDataContext = createContext({});
const ProductDataCom = ({ children }) => {
  const [Product_Data, setProduct_Data] = useState([]);
  const [After_Filter_Data, setAfter_Filter_Data] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState("");
  //for selected brand name and category name
  const [selectedBrand, setSelectedBrand] = useState([]);
  //for selecet category
  const [SelectedCategory, setSelectedCategory] = useState([]);
  //for unic color select
  const [SelectedColor, setSelectedColor] = useState([]);
  //for price filter
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxprice] = useState();
  //for input search
  const [SearchIndex, setSearchIndex] = useState("");
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

  //for product  filter with brand name
  useEffect(() => {
    try {
      let filtered = Product_Data;
      //for brand filter
      if (selectedBrand.length > 0) {
        filtered = Product_Data.filter((product) => {
          return selectedBrand.includes(product.brand);
        });
      }
      //for category filter
      if (SelectedCategory.length > 0) {
        filtered = filtered.filter((product) => {
          return SelectedCategory.includes(product.category);
        });
      }
      //for filter with color
      if (SelectedColor.length > 0) {
        filtered = filtered.filter((product) =>
          SelectedColor.includes(product.color)
        );
      }
      //for price filter
      if (minPrice && maxPrice) {
        filtered = filtered.filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
      }
      setAfter_Filter_Data(filtered);
      //  console.log(selectedBrand);
    } catch (error) {
      setError(error.message);
      console.log(error);
    }
  }, [
    selectedBrand,
    SelectedCategory,
    SelectedColor,
    minPrice,
    maxPrice,
    Product_Data,
  ]);
// for filter with search input
  //handlesubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const searchBox = form.inp.value.trim();
   
  try {
    const filtered=Product_Data.filter((product)=>{
      const search=searchBox.toLowerCase();
     

      return(
      product?.model.toLowerCase().includes(search) ||
      product?.brand.toLowerCase().includes(search) ||   
      product?.title.toLowerCase().includes(search) ||
      product?.category.toLowerCase().includes(search)|| 
      product?.color.toLowerCase().includes(search) 
      )
      
    })
    setAfter_Filter_Data(filtered)
  } catch (error) {
    console.log(error);
    
  }
//reset  the form
    form.inp.value=''
  };
  //for console data
  // useEffect(() => {
  //   // console.log(After_Filter_Data);
  // }, [After_Filter_Data,SearchIndex]);

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
    unicColor,
    SelectedColor,
    setSelectedColor,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxprice,
    SearchIndex,
    setSearchIndex,
    handleSubmit,
  };
  return (
    <ProductDataContext.Provider value={DataInfo}>
      {children}{" "}
    </ProductDataContext.Provider>
  );
};

export default ProductDataCom;
