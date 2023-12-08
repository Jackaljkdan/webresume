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
            "mr-3 select-none font-bold",
            props.className,
        )}>
            <span className={classNames(
                "inline-block",
                { "rotate-90": rotate },
            )}>
                &gt;
            </span>
            <If condition={underscore}>
                <span className="">
                    _
                </span>
            </If>
        </span>
    );
}
