import classNames from "classnames";
import { useAtom } from "jotai";

import { darkModeAtom } from "../utils/useDarkMode";

type Props = {
    className?: string,
};

export function DarkModeButton(props: Props) {
    const [darkMode, setDarkMode] = useAtom(darkModeAtom);

    return (
        <button
            className={classNames(
                "flex flex-col justify-center",
                props.className,
            )}
            onClick={() => setDarkMode(v => !v)}
        >
            <span className="material-symbols-outlined text-clickable">
                <Choose>
                    <When condition={darkMode}>
                        light_mode
                    </When>
                    <Otherwise>
                        dark_mode
                    </Otherwise>
                </Choose>
            </span>
        </button>
    );
}
