import style from './Rating.module.scss';

export const Rating = ({
    rating,
    reviews
}) => {
    let result = [];

    let [numStr, decimalStr] = rating.toString().split('.');

    // Populating full stars
    for (let i = 0; i < numStr; i++) {
        result.push('fullstar');
    };

    // Checking for half star
    if (!decimalStr) {
        decimalStr = 0;
    } else {
        decimalStr = Number(decimalStr[0].charAt(0));
    };

    // Populating half star
    if (decimalStr >= 5) {
        result.push('halfstar');
    };

    return (
        <div className={style.ratings}>
            <div>
                {result.length > 0
                    ? result.map((star, index) => {
                        if (star === 'fullstar') {
                            return <span key={index} className={style.fullstar}><i className="fa-solid fa-star"></i></span>
                        } else if (star === 'halfstar') {
                            return <span key={index} className={style.halfstar}><i className="fa-regular fa-star-half-stroke"></i></span>
                        };
                    })
                    : <p>Not rated yet.</p>
                }
            </div>

            <span>{reviews} reviews</span>
        </div>
    );
};