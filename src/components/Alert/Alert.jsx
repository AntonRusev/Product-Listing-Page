import { useEffect } from "react";

import style from "./Alert.module.css";

export const Alert = ({
    title,
    price,
    setCartAlert
}) => {
    useEffect(() => {
        setTimeout(() => {
            setCartAlert(false);
        }, 3000);
    }, []);

    console.log(title)

    return (
        <section onClick={() => setCartAlert(false)} className={style.overlay}>
            <div onClick={(e) => e.stopPropagation()} className={style.alert}>
                <p>Product "{title}" for ${price} was added to your shopping cart!</p>

                <button onClick={() => setCartAlert(false)}>Ok</button>
            </div>
        </section>
    );
};