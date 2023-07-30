import { useEffect, useRef } from "react";

// Closing dropdowns on click outside the menu

export const useClickOutside = (handler) => {
    const domNode = useRef(null);

    useEffect(() => {
        const innerHandler = (e) => {
            if (domNode.current) {
                if (!domNode.current.contains(e.target)) {
                    handler();
                };
            };
        };

        document.addEventListener("mousedown", innerHandler);

        return () => {
            document.removeEventListener("mousedown", innerHandler);
        };
    });

    return domNode;
};