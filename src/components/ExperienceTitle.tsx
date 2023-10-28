import classNames from "classnames";

import "./ExperienceTitle.scss";
import { useStrings } from "../localization/useStrings";

type Props = {
    title: string,
    from: string,
    duration: string,
    className?: string,
};

export function ExperienceTitle(props: Props) {
    const strings = useStrings();
    return (
        <div className={classNames(props.className, "experience-title")}>
            <h2>
                {props.title}
            </h2>
            <div className="time">
                <div>
                    {props.duration}
                </div>
                <div className="from">
                    {strings.exp_from} {props.from}
                </div>
            </div>
        </div>
    );
}
