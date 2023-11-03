import classNames from "classnames";

import picture from "../assets/me.jpg";

type Props = {
    className?: string,
};

export function MyPicture(props: Props) {
    return (
        <div className={classNames(
            "border-2 box-border",
            "border-back dark:border-white",
            props.className,
        )}>
            <img src={picture} alt="My picture" />
        </div>
    );
}
