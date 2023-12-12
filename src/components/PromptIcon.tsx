import classNames from "classnames";

import chevronImg from "../assets/chevron.svg";

type Props = {
    underscore?: boolean,
    rotate?: boolean,
    className?: string;
};

export function PromptIcon(props: Props) {
    const underscore = props.underscore ?? true;
    const rotate = props.rotate ?? false;
    return (
        <span aria-hidden={true} className={classNames(
            "mr-3 select-none",
            props.className,
        )}>
            <img
                className={classNames(
                    "inline -ml-1 dark:invert",
                    { "-translate-y-[.1rem]": !rotate },
                    { "rotate-90": rotate },
                )}
                src={chevronImg}
                alt="prompt icon"
            />
            <If condition={underscore}>
                <span className="-ml-1">
                    _
                </span>
            </If>
        </span>
    );
}
