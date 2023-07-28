import { createContext, useContext, useEffect, useState } from "react";

import { clothingData, footwearData } from '../assets/data';

export const ProductContext = createContext();

export const ProductProvider = ({
    children,
}) => {
    const [categoryData, setCategoryData] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('clothing')

    useEffect(() => {
        if (currentCategory === 'clothing' && clothingData) {
            setCategoryData(clothingData);
        } else if (currentCategory === 'footwear' && footwearData) {
            setCategoryData(footwearData);
        };
    }, [currentCategory]);


    const productContextValue = {
        categoryData
    };

    return (
        <>
            <ProductContext.Provider value={productContextValue}>
                {children}
            </ProductContext.Provider>
        </>
    );
};