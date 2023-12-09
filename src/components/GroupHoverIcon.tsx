import classNames from "classnames";

type Props = {
    className?: string,
    heightClassName?: string,
    src?: string,
    alt?: string,
};

export function GroupHoverIcon(props: Props) {
    return (
        <img
            className={classNames(
                props.heightClassName ?? "h-6",
                "group-hover:invert-[.6]",
                "dark:invert",
                props.className,
            )}
            src={props.src}
            alt={props.alt}
        />
    );
}
