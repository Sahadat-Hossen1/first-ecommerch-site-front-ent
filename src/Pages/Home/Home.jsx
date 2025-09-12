import React, { useContext } from 'react';
import { ProductData } from '../../Context/DataContext/ProductDataCom';

const Home = () => {
    const {user}=useContext(ProductData)
    return (
        <div>
            for test context setup
            {user.name}
        </div>
    );
};

export default Home;