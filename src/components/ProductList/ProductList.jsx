import { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductList = () => {
    const { categoryData } = useContext(ProductContext);

    return (
        <section>
            {!categoryData
                ?
                <p>There are no products to show.</p>
                :
                <ul>
                    {categoryData.map((p) => <ProductCard key={p.index} {...p} />)}
                </ul>
            }
        </section>
    );
};