import classNames from "classnames";

import picture from "../assets/react.svg";

type Props = {
    className?: string,
};

export function MyPicture(props: Props) {
    return (
        <div className={classNames(props.className)}>
            <img src={picture} alt="My picture" />
        </div>
    );
}
