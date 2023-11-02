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
            className={classNames(props.className, "icon-link")}
            href={props.href}
        >
            <img src={props.src} alt={props.alt} />
        </a>
    );
}