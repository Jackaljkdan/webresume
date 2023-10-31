import { useEffect, useRef } from "react";

export function useClickOutside<T extends HTMLElement>(onClickOutside: () => void) {
    // https://stackoverflow.com/questions/32553158/detect-click-outside-react-component/42234988#42234988
    const ref = useRef<T>(null);

    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOutside();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [onClickOutside]);

    return ref;
}