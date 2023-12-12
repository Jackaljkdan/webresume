import classNames from "classnames";

import picture from "../assets/me.jpg";
import { useStrings } from "../localization/useStrings";

type Props = {
    className?: string,
};

export function MyPicture(props: Props) {
    const strings = useStrings();
    return (
        <div className={classNames(
            "border-2 box-border",
            "border-neutral-50 dark:border-[1px]",
            props.className,
        )}>
            <img src={picture} alt={strings.a11y_pic} />
        </div>
    );
}
