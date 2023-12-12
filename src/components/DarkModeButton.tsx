import classNames from "classnames";
import { useAtom } from "jotai";

import { darkModeAtom } from "../utils/useDarkMode";
import lightModeImg from "../assets/light_mode.svg";
import darkModeImg from "../assets/dark_mode.svg";
import { GroupHoverIcon } from "./GroupHoverIcon";
import { useStrings } from "../localization/useStrings";

type Props = {
    className?: string,
};

export function DarkModeButton(props: Props) {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom);
    const strings = useStrings();

    return (
        <button
            className={classNames(
                "flex flex-col justify-center group",
                props.className,
            )}
            onClick={() => setDarkMode(v => !v)}
            aria-label={strings.a11y_darkmode}
            aria-checked={darkMode}
            role="switch"
        >
            <GroupHoverIcon
                heightClassName="h-5"
                src={darkMode ? lightModeImg : darkModeImg}
            />
        </button >
    );
}
