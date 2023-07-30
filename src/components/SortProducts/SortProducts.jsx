import { useContext, useState } from "react";

import { ProductContext } from "../../context/ProductContext";
import { useClickOutside } from "../../hooks/useClickOutside";

export const SortProducts = () => {
    const [showSortOptions, setShowSortOptions] = useState(false);

    const { itemsToDisplay, setItemsToDisplay } = useContext(ProductContext);

    const onSort = (order, sortBy) => {
        let sortedProducts;

        if (sortBy === 'title') {
            if (order === 'incremental') {
                sortedProducts = [...itemsToDisplay].sort((a, b) => a[sortBy].localeCompare(b[sortBy], undefined, {
                    numeric: true,
                    sensitivity: 'base'
                }));
            } else {
                sortedProducts = [...itemsToDisplay].sort((a, b) => b[sortBy].localeCompare(a[sortBy], undefined, {
                    numeric: true,
                    sensitivity: 'base'
                }));
            };
        } else if (sortBy === 'price') {
            if (order === 'incremental') {
                sortedProducts = [...itemsToDisplay].sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));
            } else {
                sortedProducts = [...itemsToDisplay].sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
            };
        };

        setItemsToDisplay(sortedProducts);
    };

    // Close dropdown on click outside the menu
    const domNode = useClickOutside(() => {
        setShowSortOptions(false);
    });

    return (
        <div ref={domNode}>
            {/* Toggle dropdown on button click */}
            <button onClick={() => setShowSortOptions(!showSortOptions)}>Sort by...</button>

            {showSortOptions
                ?
                <ul>
                    <li onClick={() => onSort('incremental', 'title')}>Name(A-Z)</li>
                    <li onClick={() => onSort('decremental', 'title')}>Name(Z-A)</li>
                    <li onClick={() => onSort('decremental', 'price')}>Price(Highest)</li>
                    <li onClick={() => onSort('incremental', 'price')}>Price(Lowest)</li>
                </ul>
                :
                ""
            }

        </div>
    );
};