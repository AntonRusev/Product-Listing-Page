export const ProductCard = ({
    name,
    image,
    description,
    price,
    discountPercentage,
    rating
}) => {
    return (
        <li>
            <p>{name}</p>
            <img src={image} alt="" />
            <p>{description}</p>
            <p>{price}</p>
            <p>{discountPercentage}</p>
            <p>{rating.rate} / {rating.count}</p>
        </li>
    );
};