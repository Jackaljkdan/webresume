import classNames from "classnames";

import { useStrings } from "../localization/useStrings";

type Props = {
    className?: string,
};

export function UpdatedAt(props: Props) {
    const strings = useStrings();

    return (
        <div className={classNames(
            "text-xs",
            props.className,
        )}>
            {strings.updated} @ {BUILD_DATE.substring(0, 10)}
        </div>
    );
}
