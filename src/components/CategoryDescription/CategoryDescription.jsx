import { useContext } from 'react';

import { ProductContext } from '../../context/ProductContext';
import { categoryDescription } from '../../assets/data'
import { firstLetterToCapital } from '../../utils/firstLetterToCapital';

import style from './CategoryDescription.module.scss';

export const CategoryDescription = () => {
    const { currentCategory } = useContext(ProductContext);

    const categoryName = firstLetterToCapital(currentCategory);

    return (
        <section className={style.categoryDescription}>
            <h2 className={style.categoryTitle}>{categoryName}</h2>
            <p>{categoryDescription[currentCategory]}</p>
        </section>
    );
};