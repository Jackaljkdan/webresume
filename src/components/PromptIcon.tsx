import classNames from "classnames";

type Props = {
    underscore?: boolean,
    rotate?: boolean,
    className?: string;
};

export function PromptIcon(props: Props) {
    const underscore = props.underscore ?? true;
    const rotate = props.rotate ?? false;
    return (
        <span className={classNames(
            "mr-3",
            props.className,
        )}>
            <span className={classNames(
                "material-symbols-outlined",
                "-ml-2 translate-y-1",
                { "rotate-90": rotate },
            )}>
                chevron_right
            </span>
            {underscore
                ? <span className="material-symbols-outlined -ml-3 translate-y-1">
                    minimize
                </span>
                : null
            }
        </span>
    );
}
