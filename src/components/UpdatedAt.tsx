import classNames from "classnames";

import "./UpdatedAt.scss";
import { useStrings } from "../localization/useStrings";

type Props = {
    className?: string,
};

export function UpdatedAt(props: Props) {
    const strings = useStrings();

    return (
        <div className={classNames(props.className, "updated-at")}>
            {strings.updated} @ {BUILD_DATE.substring(0, 10)}
        </div>
    );
}
