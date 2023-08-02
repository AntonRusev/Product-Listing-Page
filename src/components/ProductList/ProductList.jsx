import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { ProductContext } from "../../context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";
import { ProductsOutOfAll } from "../ProductsOutOfAll/ProductsOutOfAll";
import { Footer } from "../Footer/Footer";

import style from './ProductList.module.scss';

export const ProductList = () => {
    const [productsShown, setProductsShown] = useState({
        pageLimit: 5,
        toDisplay: 5
    });
    const [device, setDevice] = useState('mobile');

    const { itemsToDisplay, currentCategory } = useContext(ProductContext);

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
        <>
            <section className={style.productList}>
                {!itemsToDisplay || itemsToDisplay.length === 0
                    ?
                    <p>There are no products to show.</p>
                    :
                    <div className={style.shownProducts}>
                        <ProductsOutOfAll
                            currentCategory={currentCategory}
                            itemsToDisplay={itemsToDisplay}
                            productsShown={productsShown}
                        />
                        <ul className={style.products}>
                            {itemsToDisplay.slice(0, productsShown.toDisplay)?.map((p) => <ProductCard key={uuidv4()} {...p} />)}
                        </ul>

                        {productsShown.toDisplay < itemsToDisplay.length && (
                            <button
                                className={style.loadMoreBtn}
                                onClick={handleMoreProducts}
                            >
                                Load more
                            </button>
                        )}
                    </div>
                }
            </section>

            <Footer />
        </>
    );
};