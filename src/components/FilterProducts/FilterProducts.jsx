import { useContext, useEffect, useState } from "react";

import { ProductContext } from "../../context/ProductContext";

export const FilterProducts = () => {
    const [filterOptions, setFilterOptions] = useState([]);
    const [filterTags, setFilterTags] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const { categoryData } = useContext(ProductContext);

    useEffect(() => {
        if (categoryData) {
            setFilterOptions(getFilterOptions())
        };
    }, [categoryData]);

    useEffect(() => {
        setFilteredData([]);

        if (categoryData && filterTags) {
            categoryData.filter((product) => {
                filterTags.map((filterTag) => {
                    if (product.color === filterTag) {
                        setFilteredData((state) => [product, ...state]);
                    };
                });
            });
        }
    }, [filterTags]);

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

    return (
        <div>
            <h4>Filter:</h4>

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