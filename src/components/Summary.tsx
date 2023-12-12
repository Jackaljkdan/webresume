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
import { AriaOnly } from "./AriaOnly";

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

            <hr className="my-8 mx-auto w-[90%]" aria-hidden={true} />

            <section aria-label={strings.a11y_skills}>
                <ul className="flex flex-wrap justify-evenly">
                    <li>
                        <ProgressBar percentage={94}>
                            <span>React Native</span>
                            <AriaOnly>, {strings.a11y_very_advanced}</AriaOnly>
                        </ProgressBar>
                    </li>

                    <li>
                        <ProgressBar percentage={90}>
                            <span>React</span>
                            <AriaOnly>, {strings.a11y_very_advanced}</AriaOnly>
                        </ProgressBar>
                    </li>

                    <li>
                        <ProgressBar percentage={80}>
                            <span>HTML</span>
                            <span>CSS</span>
                            <AriaOnly>, {strings.a11y_advanced}</AriaOnly>
                        </ProgressBar>
                    </li>

                    <li>
                        <ProgressBar percentage={98}>
                            <span>Unity</span>
                            <AriaOnly>, {strings.a11y_very_advanced}</AriaOnly>
                        </ProgressBar>
                    </li>

                    <li>
                        <ProgressBar percentage={90}>
                            <span aria-hidden={true}>C#</span>
                            <span aria-hidden={true}>.NET</span>
                            <AriaOnly>c sharp</AriaOnly>
                            <AriaOnly>dot net</AriaOnly>
                            <AriaOnly>, {strings.a11y_very_advanced}</AriaOnly>
                        </ProgressBar>
                    </li>

                    <li>
                        <ProgressBar percentage={100}>
                            <span>Git</span>
                            <AriaOnly>, {strings.a11y_extremely_advanced}</AriaOnly>
                        </ProgressBar>
                    </li>
                </ul>
            </section>

            <hr className="my-8 mx-auto w-[90%]" aria-hidden={true} />

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
