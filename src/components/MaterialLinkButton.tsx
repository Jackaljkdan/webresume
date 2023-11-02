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
            className={classNames(props.className, "material-link")}
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
