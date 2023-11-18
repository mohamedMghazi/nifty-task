import { useEffect, useRef } from "react";

/**
 * A Hook to detect click outside an element and call a function when it happens.
 * @param refs - An array of refs to the elements that should be ignored when clicked.
 * @param onClickOutside - A function to be called when a click outside the element happens.
 * @example
 * const ref = useRef();
 * const onClickOutside = () => {
 *    console.log("Clicked outside!");
 *    // Do something...
 *    // Maybe close a modal or a dropdown menu.
 *    // Or maybe do nothing.
 *    // It's up to you.
 *    // You can even pass a function to this hook to be called when a click outside happens.
 * }
 * useClickOutsideElement([ref], onClickOutside);
 * @see https://stackoverflow.com/a/42234988/4719660
 */
export function useClickOutsideElement(refs, onClickOutside) {
    const savedCallback = useRef(onClickOutside);

    useEffect(() => {
        function handleClickOutside(event) {
            const isOutside = refs.every(ref => {
                return ref.current && !ref.current.contains(event.target);
            });

            if (isOutside) {
                savedCallback.current(event);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [refs]);

    useEffect(() => {
        savedCallback.current = onClickOutside;
    }, [onClickOutside]);
}
