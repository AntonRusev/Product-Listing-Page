import { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";

export const Header = () => {
    const { onCategoryChange, categories } = useContext(ProductContext);

    return (
        <header>
            <h1>Apparel Averagestore</h1>
            <nav>
                <ul>
                    {/* Generating a button for every possible category */}
                    {!categories
                        ? <p>...</p>
                        : categories.map((category) => <li key={category} onClick={() => onCategoryChange(category)} >{category}</li>)
                    }
                </ul>
            </nav>
        </header>
    );
};