import classNames from "classnames";

import "./Experience.scss";
import { useStrings } from "../localization/useStrings";

type Props = {
    className?: string,
};

export function Experience(props: Props) {
    const strings = useStrings();
    return (
        <div className={classNames(props.className, "experience")}>
            <h1 className="title">
                {strings.exp}
            </h1>

            <hr />

            <h2>
                Creepy Bug
            </h2>
            <div>
                {strings.creepybug_dream}
            </div>

            <h2>
                Melazeta
            </h2>
            <div>
                {strings.melaz_react}
            </div>

            <h2>
                {strings.uni_title}
            </h2>
            <div>
                {strings.uni_degree}
            </div>
        </div>
    );
}
