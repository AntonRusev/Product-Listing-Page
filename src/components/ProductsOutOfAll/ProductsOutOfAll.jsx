import style from './ProductsOutOfAll.module.scss';

export const ProductsOutOfAll = ({
    currentCategory,
    itemsToDisplay,
    productsShown
}) => {
    const allProducts = itemsToDisplay.length;

    let currentlyDisplayed;

    if (productsShown.toDisplay > allProducts) {
        currentlyDisplayed = allProducts;
    } else {
        currentlyDisplayed = productsShown.toDisplay;
    };

    return (
        <h4 className={style.title}>
            Results: <span>{currentlyDisplayed}</span> out of <span>{allProducts}</span>
        </h4>
    );
};