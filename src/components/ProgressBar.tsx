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


export function ProgressBar(props: Props) {
    const darkMode = useAtomValue(darkModeAtom);

    function ringStyle(percentage: number) {
        const bg = !darkMode ? colors["back-con"] : colors["back-con-dark"];
        const accent = colors.accent;
        return `radial-gradient(closest-side, ${bg} 84%, transparent 85% 100%), conic-gradient(${accent} ${percentage}%, transparent 0)`;
    }

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
                "flex flex-col justify-center items-center",
                "text-center text-xs leading-[.8rem]",
                props.className,
            )}
            style={springs}
        >
            {props.children}
        </animated.div>
    );
}
