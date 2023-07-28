import { createContext, useEffect, useState } from "react";

import { productData } from '../assets/data';

export const ProductContext = createContext();

export const ProductProvider = ({
    children,
}) => {
    const [categories, setCategories] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('initial');
    const [categoryData, setCategoryData] = useState([]);

    // Setting up all possible categories
    useEffect(() => {
        setCategories(Object.keys(productData));
    }, []);

    // Setting up a default category upon initial render of the page
    useEffect(() => {
        if (currentCategory === 'initial' && categories.length > 0) {
            setCurrentCategory(categories[0]);

        };
    }, [categories]);

    // Populating data for the current category only
    useEffect(() => {
        setCategoryData(productData[currentCategory]);
    }, [currentCategory]);

    const onCategoryChange = (category) => {
        setCurrentCategory(category);
    };


    const productContextValue = {
        onCategoryChange,
        categories,
        currentCategory,
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