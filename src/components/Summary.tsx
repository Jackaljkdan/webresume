import classNames from "classnames";

import "./Summary.scss";
import { MyPicture } from "./MyPicture";
import { ProgressBar } from "./ProgressBar";
import { MaterialLinkButton } from "./MaterialLinkButton";
import { IconLinkButton } from "./IconLinkButton";
import linkedin from "../assets/linkedin.png";
import { PromptIcon } from "./PromptIcon";

type Props = {
    className?: string,
};

export function Summary(props: Props) {
    return (
        <div className={classNames(props.className, "summary")}>
            <div>
                <MyPicture />

                <h3 className="my-name">
                    Daniele Cortesi
                </h3>

                <div>
                    <PromptIcon />
                    I'm a software developer by heart and trade.
                    I love solving the riddles of programming and while doing so
                    implementing great user experiences envisioned by great designers.
                </div>
            </div>


            <hr />

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

                <ProgressBar percentage={100}>
                    Git
                </ProgressBar>
            </div>

            <hr />

            <div className="links">
                <MaterialLinkButton
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    symbol="help"
                />
                <MaterialLinkButton
                    href="mailto:danicortesi.dev@gmail.com"
                    symbol="mail"
                />
                <IconLinkButton
                    src={linkedin}
                    alt="LinkedIn"
                    href="https://www.linkedin.com/in/daniele-cortesi-5b396360/"
                />
                <MaterialLinkButton
                    href="."
                    symbol="download"
                    text="CV"
                />
            </div>

        </div>
    );
}
