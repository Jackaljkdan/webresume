type Props = {
    children: React.ReactNode
};

export function AriaOnly(props: Props) {
    return (
        <span className="select-none h-0 w-0 overflow-hidden">
            {props.children}
        </span>
    );
}
