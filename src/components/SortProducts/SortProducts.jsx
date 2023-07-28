import { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";

export const SortProducts = () => {
    const { categoryData } = useContext(ProductContext);

    const onSort = (order, sortBy) => {
        let sortedProducts;

        if (sortBy === 'title') {
            if (order === 'incremental') {
                sortedProducts = [...categoryData].sort((a, b) => a[sortBy].localeCompare(b[sortBy], undefined, {
                    numeric: true,
                    sensitivity: 'base'
                }));
            } else {
                sortedProducts = [...categoryData].sort((a, b) => b[sortBy].localeCompare(a[sortBy], undefined, {
                    numeric: true,
                    sensitivity: 'base'
                }));
            };
        } else if (sortBy === 'price') {
            if (order === 'incremental') {
                sortedProducts = [...categoryData].sort((a, b) => Number(a[sortBy]) - Number(b[sortBy]));
            } else {
                sortedProducts = [...categoryData].sort((a, b) => Number(b[sortBy]) - Number(a[sortBy]));
            };
        };

        // TODO
        console.log(sortedProducts);
    };

    return (
        <div>
            <button>Sort by...</button>
            <ul>
                <li onClick={() => onSort('incremental', 'title')}>Name(A-Z)</li>
                <li onClick={() => onSort('decremental', 'title')}>Name(Z-A)</li>
                <li onClick={() => onSort('decremental', 'price')}>Price(Highest)</li>
                <li onClick={() => onSort('incremental', 'price')}>Price(Lowest)</li>
            </ul>
        </div>
    );
};