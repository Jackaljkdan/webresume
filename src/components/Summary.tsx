import classNames from "classnames";

import { MyPicture } from "./MyPicture";
import { ProgressBar } from "./ProgressBar";
import { IconLinkButton } from "./IconLinkButton";
import linketreeImg from "../assets/linktree.svg";
import mailImg from "../assets/mail.svg";
import infoImg from "../assets/info.svg";
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
        <header className={classNames(
            "summary",
            "flex flex-col justify-between",
            "bg-back-con dark:bg-back-con-dark",
            "transition-[background-color]",
            props.className,
        )}>
            <section>
                <header className="relative flex justify-between mb-6">
                    <MyPicture className="max-w-[50%]" />

                    <h1 className="self-end ml-8 text-right text-accent">
                        Daniele Cortesi
                    </h1>

                    <DarkModeButton className="absolute top-1 right-[4.5rem]" />
                    <LocaleButton className="absolute top-0 right-0" />
                </header>

                <p>
                    <PromptIcon />
                    {strings.summary}
                </p>
            </section>

            <hr className="my-8 mx-auto w-[90%]" />

            <section className="flex flex-wrap justify-evenly">
                <ProgressBar percentage={94}>
                    React {<br />} Native
                </ProgressBar>

                <ProgressBar percentage={90}>
                    React
                </ProgressBar>

                <ProgressBar percentage={80}>
                    HTML {<br />} CSS
                </ProgressBar>

                <ProgressBar percentage={98}>
                    Unity
                </ProgressBar>

                <ProgressBar percentage={90}>
                    C# {<br />} .NET
                </ProgressBar>

                <ProgressBar percentage={100}>
                    Git
                </ProgressBar>
            </section>

            <hr className="my-8 mx-auto w-[90%]" />

            <footer className="flex flex-row justify-evenly items-center">
                <CvLinkButton />
                <IconLinkButton
                    imgClassName="-translate-y-[.2rem]"
                    src={linketreeImg}
                    alt="Linktree"
                    href="https://linktr.ee/danicortesi"
                />
                <IconLinkButton
                    src={mailImg}
                    alt="mail"
                    href="mailto:danicortesi.dev@gmail.com"
                />
                <IconLinkButton
                    src={infoImg}
                    alt="info"
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                />
            </footer>

        </header>
    );
}
