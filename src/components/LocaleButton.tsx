import { useId, useState } from "react";
import classNames from "classnames";
import { useAtom } from "jotai";

import { localeAtom } from "../localization/LocaleAtom";
import { locales } from "../localization/Locale";
import { AnimatedOpen } from "../utils/AnimatedOpen";
import { fasterDefault } from "../spring/configs";
import { useClickOutside } from "../utils/useClickOutside";
import chevronImg from "../assets/chevron.svg";
import { useStrings } from "../localization/useStrings";

type Props = {
    className?: string,
};

export function LocaleButton(props: Props) {
    const [locale, setLocale] = useAtom(localeAtom);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));
    const listId = useId();
    const strings = useStrings();

    return (
        <div ref={ref} className={classNames(
            "border-[1px] text-xs",
            "bg-white dark:bg-back",
            "border-back dark:border-white",
            "hover:border-accent dark:hover:border-accent",
            "transition-all",
            props.className,
        )}>
            <button
                className={classNames(
                    "uppercase",
                    "flex items-center",
                    "py-[.05rem] px-2",
                    "text-clickable",
                )}
                onClick={() => setIsOpen(value => !value)}
                aria-label={strings.a11y_change_language}
                aria-expanded={isOpen}
                aria-controls={listId}
            >
                {locale}
                <img
                    className={classNames(
                        "dark:invert",
                        "ml-1 -mr-1 transition-transform",
                        { "rotate-90": !isOpen },
                        { "-rotate-90": isOpen },
                    )}
                    src={chevronImg}
                    aria-hidden={false}
                />
            </button>
            <AnimatedOpen
                wrapperClassName="overflow-hidden"
                isOpen={isOpen}
                springConfig={fasterDefault}
            >
                <hr className="w-full" aria-hidden={true} />
                <ul
                    className="flex flex-col items-center"
                    aria-hidden={!isOpen}
                    id={listId}
                >
                    {locales.map(el => (
                        <li key={el}>
                            <button
                                className="uppercase m-1 text-clickable"
                                onClick={() => {
                                    setLocale(el);
                                    setIsOpen(false);
                                }}
                                tabIndex={isOpen ? undefined : -1}
                            >
                                {el}
                            </button>
                        </li>
                    ))}
                </ul>
            </AnimatedOpen>
        </div>
    );
}
