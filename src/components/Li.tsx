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
        <li className={classNames(props.className, {
            "ml-10": props.nested,
        })}>
            <PromptIcon
                underscore={!nested}
                rotate={nested}
            />
            {props.children}
        </li>
    );
}
