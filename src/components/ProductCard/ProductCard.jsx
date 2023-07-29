export const ProductCard = ({
    title,
    image,
    description,
    price,
    discountPercentage,
    rating,
    color
}) => {
    return (
        <li>
            <p>Title: {title}</p>
            <img src={image} alt="" />
            <p>Description: {description}</p>
            <p>Price: ${price}</p>
            <p>Sale -%: {discountPercentage}</p>
            <p>Stars: {rating.rate} / Reviews: {rating.count}</p>
            <p>Color: {color}</p>
        </li>
    );
};