export const discountCalculator = (data) => {
    if (data) {
        const result = data.map((product) => {
            if (product.discountPercentage > 0) {
                // Saving the original price before the discount
                product.oldPrice = product.price;
                // Calculating the new price
                const newPrice = product.price - (product.discountPercentage * (product.price / 100));
                product.price = Math.round((newPrice + Number.EPSILON) * 100) / 100;
            };

            return product;
        });

        return result;
    };
};