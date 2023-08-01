import { useContext, useState } from "react";

import { ProductContext } from "../../context/ProductContext";
import { useClickOutside } from "../../hooks/useClickOutside";

import style from './SortProducts.module.scss';

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
        <section ref={domNode} className={style.sortProducts}>
            {/* Toggle dropdown on button click */}
            <button
                className={style.dropdownBtn}
                onClick={() => setShowSortOptions(!showSortOptions)}
            >
                Sort by...
            </button>

            {showSortOptions
                ?
                <div className={style.dropdownMenu}>
                    <div className={style.overlay}>
                        <ul className={style.menuOptions}>
                            <li>
                                <button
                                    className={`${style.dropdownBtn}`}
                                    onClick={() => onSort('incremental', 'title')}
                                >
                                    Name(A-Z)
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`${style.dropdownBtn}`}
                                    onClick={() => onSort('decremental', 'title')}
                                >
                                    Name(Z-A)
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`${style.dropdownBtn}`}
                                    onClick={() => onSort('decremental', 'price')}
                                >
                                    Price(Highest)
                                </button>
                            </li>
                            <li>
                                <button
                                    className={`${style.dropdownBtn}`}
                                    onClick={() => onSort('incremental', 'price')}
                                >
                                    Price(Lowest)
                                </button>
                            </li>
                        </ul>
                        <button className={`${style.mobileOnlyBtn} ${style.dropdownBtn}`} onClick={() => setShowSortOptions(!showSortOptions)}> Ok </button>
                    </div>
                </div>
                :
                ""
            }

        </section>
    );
};