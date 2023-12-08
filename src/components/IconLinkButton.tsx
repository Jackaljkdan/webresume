import classNames from "classnames";
import { GroupHoverIcon } from "./GroupHoverIcon";

type Props = {
    src: string,
    alt?: string,
    href: string,
    text?: string,
    className?: string,
    imgClassName?: string,
};

export function IconLinkButton(props: Props) {
    return (
        <a
            className={classNames("flex items-center group", props.className)}
            href={props.href}
        >
            <If condition={props.text}>
                <span className="text-color group-hover:text-contrast">
                    {props.text}
                </span>
            </If>
            <GroupHoverIcon
                className={props.imgClassName}
                src={props.src}
                alt={props.alt}
            />
        </a>
    );
}