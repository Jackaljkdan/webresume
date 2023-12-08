import classNames from "classnames";

type Props = {
    src: string,
    alt?: string,
    href: string,
    className?: string,
    imgClassName?: string,
};

export function IconLinkButton(props: Props) {
    return (
        <a
            className={classNames(
                "flex items-center",
                "invert-[1] hover:invert-[.4]",
                "dark:invert-0 dark:hover:brightness-[.6]",
                props.className,
            )}
            href={props.href}
        >
            <img
                className={classNames("h-5", props.imgClassName)}
                src={props.src}
                alt={props.alt}
            />
        </a>
    );
}