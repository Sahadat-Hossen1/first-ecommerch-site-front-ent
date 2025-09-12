import React, { createContext } from 'react';
export const ProductData=createContext({})
const ProductDataCom = ({children}) => {
    const user={
        "name":"Sahadat Hossen "
    }
    const DataInfo={user,}
    return (
        <ProductData.Provider value={DataInfo} >{children} </ProductData.Provider>
    );
};

export default ProductDataCom;