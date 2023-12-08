import classNames from "classnames";

type Props = {
    className?: string,
    src?: string,
    alt?: string,
};

export function GroupHoverIcon(props: Props) {
    return (
        <img
            className={classNames(
                "h-6",
                "invert-[1] group-hover:invert-[.4]",
                "dark:invert-0 dark:group-hover:brightness-[.6]",
                props.className,
            )}
            src={props.src}
            alt={props.alt}
        />
    );
}
