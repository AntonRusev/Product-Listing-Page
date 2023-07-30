import { useContext, useEffect, useState } from "react";

import { ProductContext } from "../../context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductList = () => {
    const [productsShown, setProductsShown] = useState({
        pageLimit: 5,
        toDisplay: 5
    });

    const { categoryData } = useContext(ProductContext);

    useEffect(() => {
        setProductsShown({
            pageLimit: 5,
            toDisplay: 5
        });
    }, [categoryData]);

    const handleMoreProducts = () => {
        const nextToDisplay = productsShown.toDisplay + productsShown.pageLimit;
        setProductsShown({ ...productsShown, toDisplay: nextToDisplay });
    };

    return (
        <section>
            {!categoryData
                ?
                <p>There are no products to show.</p>
                :
                <div>
                    <ul>
                        {categoryData.slice(0, productsShown.toDisplay)?.map((p) => <ProductCard key={p.id} {...p} />)}
                    </ul>

                    {productsShown.toDisplay < categoryData.length && (
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