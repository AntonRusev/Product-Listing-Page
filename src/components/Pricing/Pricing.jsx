import style from './Pricing.module.scss';

export const Pricing = ({
    oldPrice,
    discountPercentage,
    price
}) => {

    return (
        <div className={style.pricing}>
            {/* If there is a discount */}
            {oldPrice
                ?
                <div className={style.discountHolder}>
                    <div className={style.oldPrice}>
                        $<span>{oldPrice}</span>
                    </div>
                    <p className={style.discount}>-{discountPercentage}%</p>
                </div>
                : ''
            }
            <p className={style.price}>${price}</p>
        </div>
    );
};