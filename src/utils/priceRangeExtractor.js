export const priceRangeExtractor = (data) => {

    // Extracting the lowest and highest prices in the current category
    let lowest = 0;
    let highest = 0;

    data.map((p) => {
        const price = Number(p.price);

        if (lowest === 0) {
            lowest = price;
        };

        if (price < lowest) {
            lowest = price;
        };

        if (price > highest) {
            highest = price;
        };
    });

    return { lowest, highest };
};