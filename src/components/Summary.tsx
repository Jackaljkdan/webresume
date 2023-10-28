import classNames from "classnames";

import "./Summary.scss";
import { MyPicture } from "./MyPicture";
import { ProgressBar } from "./ProgressBar";
import { MaterialLinkButton } from "./MaterialLinkButton";
import { IconLinkButton } from "./IconLinkButton";
import linkedin from "../assets/linkedin.png";
import { PromptIcon } from "./PromptIcon";
import { useStrings } from "../localization/useStrings";

type Props = {
    className?: string,
};

export function Summary(props: Props) {
    const strings = useStrings();
    return (
        <div className={classNames(props.className, "summary")}>
            <div>
                <MyPicture />

                <h2 className="my-name title">
                    Daniele Cortesi
                </h2>

                <div>
                    <PromptIcon />
                    {strings.summary}
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
                    href="."
                    symbol="download"
                    text="CV"
                />
                <IconLinkButton
                    src={linkedin}
                    alt="LinkedIn"
                    href="https://www.linkedin.com/in/daniele-cortesi-5b396360/"
                />
                <MaterialLinkButton
                    href="mailto:danicortesi.dev@gmail.com"
                    symbol="mail"
                />
                <MaterialLinkButton
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    symbol="help"
                />
            </div>

        </div>
    );
}
