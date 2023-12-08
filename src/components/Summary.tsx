import classNames from "classnames";

import { MyPicture } from "./MyPicture";
import { ProgressBar } from "./ProgressBar";
import { MaterialLinkButton } from "./MaterialLinkButton";
import { IconLinkButton } from "./IconLinkButton";
import linketree from "../assets/linktree.png";
import { PromptIcon } from "./PromptIcon";
import { useStrings } from "../localization/useStrings";
import { CvLinkButton } from "./CvLinkButton";
import { LocaleButton } from "./LocaleButton";
import { DarkModeButton } from "./DarkModeButton";

type Props = {
    className?: string,
};

export function Summary(props: Props) {
    const strings = useStrings();
    return (
        <div className={classNames(
            "summary",
            "flex flex-col justify-between",
            "bg-back-con dark:bg-back-con-dark",
            "transition-[background-color]",
            props.className,
        )}>
            <div>
                <div className="relative flex justify-between mb-6">
                    <MyPicture className="max-w-[50%]" />

                    <h2 className="self-end ml-8 text-right text-accent">
                        Daniele Cortesi
                    </h2>

                    <DarkModeButton className="absolute top-[.1rem] right-[4.5rem]" />
                    <LocaleButton className="absolute top-0 right-0" />
                </div>

                <div className="about">
                    <PromptIcon />
                    {strings.summary}
                </div>
            </div>

            <hr className="my-8 mx-auto w-[90%]" />

            <div className="flex flex-wrap justify-evenly">
                <ProgressBar percentage={94}>
                    React {<br />} Native
                </ProgressBar>

                <ProgressBar percentage={90}>
                    React
                </ProgressBar>

                <ProgressBar percentage={80}>
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

            <hr className="my-8 mx-auto w-[90%]" />

            <div className="flex flex-row justify-evenly items-center">
                <CvLinkButton />
                <IconLinkButton
                    imgClassName="p-[1px]"
                    src={linketree}
                    alt="Linktree"
                    href="https://linktr.ee/danicortesi"
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
