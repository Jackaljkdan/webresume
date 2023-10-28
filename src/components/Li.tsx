import classNames from "classnames";

import { PromptIcon } from "./PromptIcon";

type Props = {
    className?: string,
    nested?: boolean,
    children: React.ReactNode,
};

export function Li(props: Props) {
    const nested = props.nested ?? false;
    return (
        <li className={classNames(props.className)}>
            <PromptIcon underscore={!nested} />
            {props.children}
        </li>
    );
}
