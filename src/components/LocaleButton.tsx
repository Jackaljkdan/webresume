import { useState } from "react";
import classNames from "classnames";
import { useAtom } from "jotai";

import { localeAtom } from "../localization/LocaleAtom";
import { locales } from "../localization/Locale";
import { AnimatedOpen } from "../utils/AnimatedOpen";
import { fasterDefault } from "../spring/configs";
import { useClickOutside } from "../utils/useClickOutside";

type Props = {
    className?: string,
};

export function LocaleButton(props: Props) {
    const [locale, setLocale] = useAtom(localeAtom);
    const [isOpen, setIsOpen] = useState(false);
    const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

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
            >
                {locale}
                <span className={classNames(
                    "material-symbols-outlined text-xl translate-x-1",
                    "transition-transform",
                    { "rotate-180": isOpen },
                )}>
                    expand_more
                </span>
            </button>
            <AnimatedOpen
                wrapperClassName="overflow-hidden"
                contentClassName="flex flex-col"
                isOpen={isOpen}
                springConfig={fasterDefault}
            >
                <hr />
                {locales.map(el => (
                    <button
                        className="uppercase m-1 text-clickable"
                        key={el}
                        onClick={() => {
                            setLocale(el);
                            setIsOpen(false);
                        }}
                    >
                        {el}
                    </button>
                ))}
            </AnimatedOpen>
        </div>
    );
}
