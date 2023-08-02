import { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";

import style from './Header.module.scss';

export const Header = () => {
    const { onCategoryChange, categories } = useContext(ProductContext);

    return (
        <header className={style.header}>
            <div className={style.centered}>
                <h1 className={style.title}>Apparel Averagestore</h1>
                <nav className={style.nav}>
                    <ul className={style.navList}>
                        {/* Generating a button for every possible category */}
                        {!categories
                            ? <p>...</p>
                            : categories.map((category) =>
                                <li key={category}>
                                    <button 
                                    onClick={() => onCategoryChange(category)}
                                    className={style.categoryNavButton}
                                    >
                                        {category}
                                    </button>
                                </li>)
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};