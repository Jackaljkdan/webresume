import classNames from "classnames";

import "./PromptIcon.scss";

type Props = {
    underscore?: boolean,
    rotate?: boolean,
    className?: string;
};

export function PromptIcon(props: Props) {
    const underscore = props.underscore ?? true;
    const rotate = props.rotate ?? false;
    return (
        <span className={classNames(props.className, "prompt-icon")}>
            <span className={classNames("material-symbols-outlined", { rotated: rotate })}>
                chevron_right
            </span>
            <span className="material-symbols-outlined">
                {underscore ? "minimize" : null}
            </span>
        </span>
    );
}
