import style from './Rating.module.scss';

export const Rating = ({
    rating
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
        <div>
            {result.map((star, index) => {
                if (star === 'fullstar') {
                    return <i key={index} className="fa-solid fa-star"></i>
                } else if (star === 'halfstar') {
                    return <i key={index} className="fa-regular fa-star-half-stroke"></i>
                };
            })}
        </div>
    );
};