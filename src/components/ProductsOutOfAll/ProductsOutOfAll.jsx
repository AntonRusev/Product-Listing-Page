export const ProductsOutOfAll = ({
    currentCategory,
    itemsToDisplay,
    productsShown
}) => {
    const category = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);
    const allProducts = itemsToDisplay.length;
    
    let currentlyDisplayed;

    if (productsShown.toDisplay > allProducts) {
        currentlyDisplayed = allProducts
    } else {
        currentlyDisplayed = productsShown.toDisplay
    }

    return (
        <h4>
            Currently showing {currentlyDisplayed} out of {allProducts} products from the {category} category.
        </h4>
    );
};