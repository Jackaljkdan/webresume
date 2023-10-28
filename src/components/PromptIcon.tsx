import classNames from "classnames";

import "./PromptIcon.scss";

type Props = {
    underscore?: boolean,
    className?: string;
};

export function PromptIcon(props: Props) {
    const underscore = props.underscore ?? true;
    return (
        <span className={classNames(props.className, "prompt-icon")}>
            <span className="material-symbols-outlined">
                chevron_right
            </span>
            <span className="material-symbols-outlined">
                {underscore ? "minimize" : null}
            </span>
        </span>
    );
}
