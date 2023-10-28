import classNames from "classnames";

import "./ProgressBar.scss";
import v from "../_variables.module.scss";

type Props = {
    percentage: number,
    className?: string,
    children: React.ReactNode,
};

export function ProgressBar(props: Props) {
    return (
        <div
            className={classNames(props.className, "progress-bar")}
            style={{
                background: `radial-gradient(closest-side, ${v.backgroundContrast} 84%, transparent 85% 100%), conic-gradient(${v.accent} ${props.percentage}%, transparent 0)`,
            }}
        >
            {props.children}
        </div>
    );
}
