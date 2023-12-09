import classNames from "classnames";
import { useAtom } from "jotai";

import { darkModeAtom } from "../utils/useDarkMode";
import lightModeImg from "../assets/light_mode.svg";
import darkModeImg from "../assets/dark_mode.svg";
import { GroupHoverIcon } from "./GroupHoverIcon";

type Props = {
    className?: string,
};

export function DarkModeButton(props: Props) {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom);

    return (
        <button
            className={classNames(
                "flex flex-col justify-center group",
                props.className,
            )}
            onClick={() => setDarkMode(v => !v)}
        >
            <GroupHoverIcon
                heightClassName="h-5"
                alt={darkMode ? "light mode" : "dark mode"}
                src={darkMode ? lightModeImg : darkModeImg}
            />
        </button >
    );
}
