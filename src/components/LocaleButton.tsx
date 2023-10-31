import { useState } from "react";
import classNames from "classnames";
import { useAtom } from "jotai";

import "./LocaleButton.scss";
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
        <div ref={ref} className={classNames(props.className, "locale-btn-wrapper")}>
            <button
                className={classNames("locale-btn", {
                    open: isOpen,
                })}
                onClick={() => setIsOpen(value => !value)}
            >
                {locale}
                <span className="material-symbols-outlined">
                    expand_more
                </span>
            </button>
            <AnimatedOpen
                contentClassName="locales-list"
                isOpen={isOpen}
                springConfig={fasterDefault}
            >
                <hr />
                {locales.map(el => (
                    <button
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
