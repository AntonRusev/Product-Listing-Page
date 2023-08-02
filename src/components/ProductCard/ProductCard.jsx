import { useState } from "react";

import { Alert } from "../Alert/Alert";
import { Pricing } from "../Pricing/Pricing";
import { Rating } from "../Rating/Rating";

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
            <h6 className={style.cardTitle}>{title}</h6>
            <p className={style.desc}>{description.substring(0, 70)}...</p>

            <div className={style.extraInfo}>
                <Rating rating={rating.rate} reviews={rating.count} />

                <Pricing oldPrice={oldPrice} discountPercentage={discountPercentage} price={price} />
            </div>

            <button
                className={style.addToCartBtn}
                onClick={() => setCartAlert(true)}
            >
                <i className="fa-solid fa-cart-shopping"></i>
                ADD TO CART
            </button>

            {cartAlert
                ? <Alert title={title} price={price} setCartAlert={setCartAlert} />
                : ''
            }
        </li>
    );
};