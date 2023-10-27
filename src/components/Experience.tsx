import classNames from "classnames";

import "./Experience.scss";

type Props = {
    className?: string,
};

export function Experience(props: Props) {
    return (
        <div className={classNames(props.className, "experience")}>
            <h1 className="title">
                Experience
            </h1>

            <hr />

            <h2>
                Creepy Bug
            </h2>
            <div>
                Living the indie game development dream.
            </div>

            <h2>
                Melazeta
            </h2>
            <div>
                React Native and all that jazz
            </div>

            <h2>
                University of Bologna
            </h2>
            <div>
                3+2 years degree in computer science
            </div>
        </div>
    );
}
