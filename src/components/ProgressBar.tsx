import classNames from "classnames";
import { useSpring, animated, config } from "@react-spring/web";
import { useAtomValue } from "jotai";

import { darkModeAtom } from "../utils/useDarkMode";
import { colors } from "../colors";

type Props = {
    percentage: number,
    className?: string,
    children: React.ReactNode,
};

function ringStyle(percentage: number) {
    return `conic-gradient(${colors.accent} ${percentage}%, transparent 0)`;
}

export function ProgressBar(props: Props) {
    const darkMode = useAtomValue(darkModeAtom);
    const bgColor = !darkMode ? colors["back-con"] : colors["back-con-dark"];

    const springs = useSpring({
        from: { background: ringStyle(0) },
        to: { background: ringStyle(props.percentage) },
        config: config.slow,
    });

    return (
        <animated.div
            className={classNames(
                "w-[75px] h-[75px] m-3",
                "rounded-full",
                "text-center text-xs leading-[.8rem]",
                props.className,
            )}
            style={springs}
        >
            <div
                className={classNames(
                    "w-full h-full",
                    "flex flex-col justify-center items-center",
                )}
                style={{ background: `radial-gradient(closest-side, ${bgColor} 84%, transparent 85% 100%)` }}
            >
                {props.children}
            </div>
        </animated.div>
    );
}
