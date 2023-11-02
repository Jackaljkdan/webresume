import classNames from "classnames";
import { useSpring, animated, config } from "@react-spring/web";

import v from "../_variables.module.scss";

type Props = {
    percentage: number,
    className?: string,
    children: React.ReactNode,
};

function ringStyle(percentage: number) {
    return `radial-gradient(closest-side, ${v.backgroundContrast} 84%, transparent 85% 100%), conic-gradient(${v.accent} ${percentage}%, transparent 0)`;
}

export function ProgressBar(props: Props) {
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
