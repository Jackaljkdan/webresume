import classNames from "classnames";

import "./PromptIcon.scss";

type Props = {
    className?: string;
};

export function PromptIcon(props: Props) {
    return (
        <span className={classNames(props.className, "prompt-icon")}>
            <span className="material-symbols-outlined">
                chevron_right
            </span>
            <span className="material-symbols-outlined">
                minimize
            </span>
        </span>
    );
}
