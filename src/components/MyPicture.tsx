import classNames from "classnames";

import picture from "../assets/me.jpg";

type Props = {
    className?: string,
};

export function MyPicture(props: Props) {
    return (
        <div className={classNames(props.className, "border-2 box-border")}>
            <img src={picture} alt="My picture" />
        </div>
    );
}
