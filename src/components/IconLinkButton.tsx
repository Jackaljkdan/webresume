import classNames from "classnames";

type Props = {
    src: string,
    alt?: string,
    href: string,
    className?: string,
};

export function IconLinkButton(props: Props) {
    return (
        <a
            className={classNames(
                "flex items-center",
                "hover:brightness-[.6]",
                props.className,
            )}
            href={props.href}
        >
            <img className="h-5" src={props.src} alt={props.alt} />
        </a>
    );
}