import classNames from "classnames";

import { PromptIcon } from "./PromptIcon";

type Props = {
    className?: string,
    children: React.ReactNode,
};

export function Li(props: Props) {
    return (
        <li className={classNames(props.className)}>
            <PromptIcon />
            {props.children}
        </li>
    );
}
