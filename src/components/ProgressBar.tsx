import classNames from "classnames";
import { useSpring, animated, config } from "@react-spring/web";

import "./ProgressBar.scss";
import v from "../_variables.module.scss";

type Props = {
    percentage: number,
    className?: string,
    children: React.ReactNode,
};

export function ProgressBar(props: Props) {
    const springs = useSpring({
        from: { background: `radial-gradient(closest-side, ${v.backgroundContrast} 84%, transparent 85% 100%), conic-gradient(${v.accent} 0%, transparent 0)` },
        to: { background: `radial-gradient(closest-side, ${v.backgroundContrast} 84%, transparent 85% 100%), conic-gradient(${v.accent} ${props.percentage}%, transparent 0)` },
        config: config.slow,
    });

    return (
        <animated.div
            className={classNames(props.className, "progress-bar")}
            style={springs}
        >
            {props.children}
        </animated.div>
    );
}
