import { useContext } from 'react';

import { ProductContext } from '../../context/ProductContext';
import { categoryDescription } from '../../assets/data'
import { firstLetterToCapital } from '../../utils/firstLetterToCapital';

export const CategoryDescription = () => {
    const { currentCategory } = useContext(ProductContext);

    const categoryName = firstLetterToCapital(currentCategory);

    return (
        <section>
            <h3>{categoryName}</h3>
            <p>{categoryDescription[currentCategory]}</p>
        </section>
    );
};