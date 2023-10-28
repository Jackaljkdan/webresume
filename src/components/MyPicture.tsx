import classNames from "classnames";

import "./MyPicture.scss";
import picture from "../assets/me.jpg";

type Props = {
    className?: string,
};

export function MyPicture(props: Props) {
    return (
        <div className={classNames(props.className, "my-pic")}>
            <img src={picture} alt="My picture" />
        </div>
    );
}
