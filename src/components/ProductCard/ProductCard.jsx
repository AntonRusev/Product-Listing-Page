import { useState } from "react";
import { Alert } from "../Alert/Alert";

import style from './ProductCard.module.scss';

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
    const [cartAlert, setCartAlert] = useState(false);

    return (
        <li className={style.card}>
            <img className={style.image} src={image} alt="" />
            <h6 className={style.cardTitle}>Title: {title}</h6>
            <p className={style.desc}>Description: {description}</p>
            {/* If there is a discount show these two */}
            {oldPrice ? <p>Old Price: ${oldPrice}</p> : ''}
            {oldPrice ? <p>Sale -%: {discountPercentage}</p> : ''}
            <p>Price: ${price}</p>
            <p>Stars: {rating.rate} / Reviews: {rating.count}</p>
            <p>Color: {color}</p>
            <button onClick={() => setCartAlert(true)}>Add to cart</button>
            {cartAlert
                ? <Alert title={title} price={price} setCartAlert={setCartAlert} />
                : ''
            }
        </li>
    );
};