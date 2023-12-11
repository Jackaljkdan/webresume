import classNames from "classnames";

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
        <header className={classNames(
            "flex justify-between items-center",
            "my-8",
            props.className,
        )}>
            <h3>
                {props.title}
            </h3>
            <div className={classNames(
                "text-sm leading-4 whitespace-nowrap",
                "text-accent-light text-right italic",
                "ml-8",
            )}>
                <div>
                    {props.duration}
                </div>
                <div className="text-[0.75em]">
                    {strings.exp_from} {props.from}
                </div>
            </div>
        </header>
    );
}
