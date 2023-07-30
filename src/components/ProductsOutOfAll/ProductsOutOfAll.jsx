import { firstLetterToCapital } from "../../utils/firstLetterToCapital";

export const ProductsOutOfAll = ({
    currentCategory,
    itemsToDisplay,
    productsShown
}) => {

    const category = firstLetterToCapital(currentCategory)
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