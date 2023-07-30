export const firstLetterToCapital = (string) => {
    if (typeof string === "string") {
        const modified = string.charAt(0).toUpperCase() + string.slice(1);
        return modified;
    };
};