import classNames from "classnames";

type Props = {
    symbol: string,
    href: string,
    text?: string,
    className?: string,
};

export function MaterialLinkButton(props: Props) {
    return (
        <a
            className={classNames(
                "material-link",
                "flex items-center",
                "text-black dark:text-white",
                "hover:text-black hover:invert-[.6]",
                "dark:hover:text-white dark:hover:invert-0 dark:hover:brightness-[.6]",
                props.className,
            )}
            href={props.href}
        >
            <If condition={props.text}>
                <span className="link-text">
                    {props.text}
                </span>
            </If>
            <span className="material-symbols-outlined">
                {props.symbol}
            </span>
        </a>
    );
}
