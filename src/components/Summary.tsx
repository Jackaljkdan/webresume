import classNames from "classnames";

import "./Summary.scss";
import { MyPicture } from "./MyPicture";
import { ProgressBar } from "./ProgressBar";

type Props = {
    className?: string,
};

export function Summary(props: Props) {
    return (
        <div className={classNames(props.className, "summary")}>
            <MyPicture />

            <h3 className="my-name">
                Daniele Cortesi
            </h3>

            <div>
                I'm a software developer by heart and trade.
                I love solving the riddles of programming and while doing so
                implementing great user experiences envisioned by great designers.
            </div>

            <div className="skills">
                <ProgressBar percentage={94}>
                    React {<br />} Native
                </ProgressBar>

                <ProgressBar percentage={90}>
                    React
                </ProgressBar>

                <ProgressBar percentage={60}>
                    HTML {<br />} CSS {<br />} SASS
                </ProgressBar>

                <ProgressBar percentage={98}>
                    Unity
                </ProgressBar>

                <ProgressBar percentage={90}>
                    C#
                </ProgressBar>
            </div>

        </div>
    );
}
