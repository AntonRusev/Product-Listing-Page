import { useContext, useEffect, useState } from "react";
import Slider from "react-slider";

import { ProductContext } from "../../context/ProductContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { priceRangeExtractor } from "../../utils/priceRangeExtractor";

import style from './FilterProducts.module.scss';

export const FilterProducts = () => {
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [filterOptions, setFilterOptions] = useState([]);
    const [filterTags, setFilterTags] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [priceRange, setPriceRange] = useState({
        lowest: 0,
        highest: 0,
        value: [0, 100]
    });

    const { width } = useWindowDimensions();

    const { categoryData, setItemsToDisplay } = useContext(ProductContext);

    // Always show filters when screen is not mobile
    useEffect(() => {
        if (width > 720) {
            setShowFilterOptions(true);
        };
    }, [width]);

    useEffect(() => {
        if (categoryData) {
            // Setting filter options for the current category
            setFilterOptions(getFilterOptions());

            // Setting highest and lowest possible prices for the current category
            const range = priceRangeExtractor(categoryData);
            setPriceRange({ value: [range.lowest, range.highest], lowest: range.lowest, highest: range.highest });
        };
    }, [categoryData]);

    // Display the products after filtering
    useEffect(() => {
        setItemsToDisplay(filteredData);
    }, [filteredData]);

    // Filtering the products of the current category
    useEffect(() => {
        setFilteredData([]);

        const minFilterPrice = priceRange.value[0];
        const maxFilterPrice = priceRange.value[1]

        if (categoryData) {
            categoryData.filter((product) => {
                if (filterTags.length > 0) {
                    // If there is filtering by color active
                    filterTags.map((filterTag) => {
                        if (product.color === filterTag
                            && product.price >= minFilterPrice
                            && product.price <= maxFilterPrice
                        ) {
                            setFilteredData((state) => [product, ...state]);
                        };
                    });
                } else {
                    // // Only in case of price filtering
                    if (product.price >= minFilterPrice
                        && product.price <= maxFilterPrice) {
                        setFilteredData((state) => [product, ...state]);
                    };
                };
            });
        };
    }, [filterTags, priceRange]);

    // Tracking which filter boxes are checked
    const filterHandler = (event) => {
        if (event.target.checked) {
            setFilterTags([...filterTags, event.target.value]);
        } else {
            setFilterTags(
                filterTags.filter((filterTag) => filterTag !== event.target.value)
            );
        };
    };

    // Dynamically generating filter options
    const getFilterOptions = () => {
        const options = [];

        categoryData.map((item) => {
            const color = item.color;

            if (!options.includes(color)) {
                options.push(color);
            };
        });

        // Sorting the options in alphabetical order
        options.sort();

        return options;
    };

    // Clearing and reseting all filters
    const clearFilters = () => {
        setFilterTags([]);

        if (categoryData) {
            const range = priceRangeExtractor(categoryData);
            setPriceRange({ value: [range.lowest, range.highest], lowest: range.lowest, highest: range.highest });
        };

        // Unchecking the checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        };
    };

    return (
        <section className={style.filter}>
            <h3 className={style.filtersTitle}>Filters</h3>
            {/* Toggle dropdown on button click (Only active on mobile screen) */}
            <button
                className={`${style.dropdownBtn} ${style.mobileOnlyBtn}`}
                onClick={() => setShowFilterOptions(!showFilterOptions)}
            >
                Filter
            </button>

            {showFilterOptions
                ?
                <div className={style.dropdownMenu}>
                    <div className={style.overlay}>
                        <div className={style.sliderHolder}>
                            <Slider
                                className={style.slider}
                                thumbClassName={style.thumb}
                                trackClassName={style.track}
                                withTracks={true}
                                onChange={(value) => setPriceRange((state) => ({ ...state, value }))}
                                value={priceRange.value}
                                min={priceRange.lowest}
                                max={priceRange.highest}
                                minDistance={1}
                            />
                            <p>${priceRange.value[0]} - ${priceRange.value[1]}</p>
                        </div>

                        <ul className={style.checkboxHolder}>
                            {
                                filterOptions.map((color) => {
                                    return (
                                        <li key={color}>
                                            <label>
                                                <input
                                                    className={style.checkbox}
                                                    onChange={filterHandler}
                                                    type="checkbox"
                                                    value={color}
                                                />
                                                {color}
                                            </label>
                                        </li>
                                    );
                                })
                            }
                        </ul>

                        {/* Clearing all active filters */}
                        <button
                            className={`${style.dropdownBtn}`}
                            onClick={clearFilters}
                        >
                            Clear
                        </button>

                        {/* Hiding the filter options on mobile screen */}
                        <button
                            className={`${style.mobileOnlyBtn} ${style.dropdownBtn}`}
                            onClick={() => setShowFilterOptions(!showFilterOptions)}
                        >
                            Ok
                        </button>
                    </div>
                </div>
                :
                ""
            }
        </section>
    );
};