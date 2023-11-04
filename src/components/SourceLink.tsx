import classNames from "classnames";

type Props = {
    className?: string,
};

export function SourceLink(props: Props) {
    return (
        <a
            className={classNames("text-xs", props.className)}
            href="https://github.com/Jackaljkdan/webresume"
        >
            Source
        </a>
    );
}
