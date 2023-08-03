import { useEffect } from "react";

import style from "./Alert.module.scss";

export const Alert = ({
    title,
    setCartAlert
}) => {
    // Closing the message after 2 seconds
    useEffect(() => {
        setTimeout(() => {
            setCartAlert(false);
        }, 2000);
    }, []);

    return (
        <section
            onClick={() => setCartAlert(false)}
            className={style.overlay}
        >
            <div className={style.alert}>
                <i className="fa-solid fa-cart-shopping"></i>
                <p>"{title}" was added to your shopping cart!</p>
            </div>
        </section>
    );
};