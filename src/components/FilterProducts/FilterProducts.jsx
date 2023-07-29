import { useContext, useEffect, useState } from "react";
import Slider from "react-slider";

import { ProductContext } from "../../context/ProductContext";

import style from './FilterProducts.module.css';
import { priceRangeExtractor } from "../../utils/priceRangeExtractor";

// const min = 1;
// const max = 1000;

export const FilterProducts = () => {
    const [filterOptions, setFilterOptions] = useState([]);
    const [filterTags, setFilterTags] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    // const [priceRange, setPriceRange] = useState([min, max]);
    const [priceRange, setPriceRange] = useState({
        lowest: 0,
        highest: 0,
        value: [0, 0]
    });


    const { categoryData } = useContext(ProductContext);

    useEffect(() => {
        if (categoryData) {
            // Setting filter options for the current category
            setFilterOptions(getFilterOptions());

            // Setting highest and lowest possible prices for the current category
            const range = priceRangeExtractor(categoryData);
            setPriceRange((state) => ({ ...state, lowest: range.lowest, highest: range.highest }))
        };
    }, [categoryData]);

    useEffect(() => {
        setFilteredData([]);

        if (categoryData && filterTags.length > 0) {
            categoryData.filter((product) => {
                filterTags.map((filterTag) => {
                    if (product.color === filterTag
                        && product.price >= priceRange.value[0]
                        && product.price <= priceRange.value[1]
                    ) {
                        setFilteredData((state) => [product, ...state]);
                    };
                });
            });
        }
        if (categoryData && filterTags.length === 0) {
            categoryData.filter((product) => {
                console.log('hit')
                if (product.price >= priceRange.value[0]
                    && product.price <= priceRange.value[1]) {
                    setFilteredData((state) => [product, ...state]);

                };
            });
        }
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

    // TODO Add clear filters button

    return (
        <div className={style.filter}>
            <h4>Filter:</h4>

            <div>
                <p>{priceRange.value[0]} - {priceRange.value[1]}</p>
                <Slider
                    // className="horizontal-slider"
                    // thumbClassName="example-thumb"
                    // trackClassName="example-track"
                    // defaultValue={[0, 100]}
                    // ariaLabel={['Lower thumb', 'Upper thumb']}
                    // ariaValuetext={state => `Thumb value ${state.valueNow}`}
                    // renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                    // pearling
                    // minDistance={10}

                    className={style.slider}
                    thumbClassName={style.thumb}
                    trackClassName={style.track}
                    withTracks={true}
                    onChange={(value) => setPriceRange((state) => ({ ...state, value }))}
                    value={priceRange.value}
                    min={priceRange.lowest}
                    max={priceRange.highest}
                    minDistance={10}
                />
            </div>

            <ul>
                {
                    filterOptions.map((color) => {
                        return (
                            <li key={color}>
                                <label>
                                    <input
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
        </div>
    );
};