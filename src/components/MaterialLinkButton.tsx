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
                "text-white",
                "hover:text-white hover:brightness-[.6]",
                props.className,
            )}
            href={props.href}
        >
            {props.text
                ? <span className="link-text">
                    {props.text}
                </span>
                : null
            }
            <span className="material-symbols-outlined">
                {props.symbol}
            </span>
        </a>
    );
}
