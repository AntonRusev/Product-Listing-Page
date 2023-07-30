export const ProductCard = ({
    title,
    image,
    description,
    price,
    discountPercentage,
    rating,
    color,
    oldPrice
}) => {
    return (
        <li>
            <p>Title: {title}</p>
            <img src={image} alt="" />
            <p>Description: {description}</p>
            {/* If there is a discount show these two */}
            {oldPrice ? <p>Old Price: ${oldPrice}</p> : ''}
            {oldPrice ? <p>Sale -%: {discountPercentage}</p> : ''}
            <p>Price: ${price}</p>
            <p>Stars: {rating.rate} / Reviews: {rating.count}</p>
            <p>Color: {color}</p>
        </li>
    );
};