import { useContext, useEffect, useState } from "react";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { ProductContext } from "../../context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductList = () => {
    const [productsShown, setProductsShown] = useState({
        pageLimit: 5,
        toDisplay: 5
    });
    const [device, setDevice] = useState('mobile');

    const { itemsToDisplay } = useContext(ProductContext);

    // Current window width
    const { width } = useWindowDimensions();

    // Reseting the number of displayed products upon category change
    useEffect(() => {
        if (device === 'mobile') {
            setProductsShown({
                pageLimit: 5,
                toDisplay: 5
            });
        } else if (device === 'tablet') {
            setProductsShown({
                pageLimit: 10,
                toDisplay: 10
            });
        } else if (device === 'desktop') {
            setProductsShown({
                pageLimit: 15,
                toDisplay: 15
            });
        };
    }, [itemsToDisplay]);

    // Setting up the window width ranges for devices
    useEffect(() => {
        if (width > 1220) {
            setDevice('desktop');
        } else if (width > 720) {
            setDevice('tablet');
        } else {
            setDevice('mobile');
        }
    }, [width]);

    // Rendering different number of products depending on screen size(mobile vs desktop);
    useEffect(() => {
        if (device === 'desktop') {
            setProductsShown({ toDisplay: 15, pageLimit: 15 });
        } else if (device === 'tablet') {
            setProductsShown({ toDisplay: 10, pageLimit: 10 });
        } else {
            setProductsShown({ toDisplay: 5, pageLimit: 5 });
        };
    }, [itemsToDisplay, width]);

    // Showing more products
    const handleMoreProducts = () => {
        const nextToDisplay = productsShown.toDisplay + productsShown.pageLimit;
        setProductsShown({ ...productsShown, toDisplay: nextToDisplay });
    };

    return (
        <section>
            {!itemsToDisplay || itemsToDisplay.length === 0
                ?
                <p>There are no products to show.</p>
                :
                <div>
                    <ul>
                        {itemsToDisplay.slice(0, productsShown.toDisplay)?.map((p) => <ProductCard key={p.id} {...p} />)}
                    </ul>

                    {productsShown.toDisplay < itemsToDisplay.length && (
                        <button
                            className="mt-4"
                            onClick={handleMoreProducts}
                        >
                            Load more
                        </button>
                    )}
                </div>
            }
        </section>
    );
};