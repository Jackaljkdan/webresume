import { useState } from "react";
import classNames from "classnames";
import { useAtom } from "jotai";

import "./LocaleButton.scss";
import { localeAtom } from "../localization/LocaleAtom";
import { locales } from "../localization/Locale";

type Props = {
    className?: string,
};

export function LocaleButton(props: Props) {
    const [locale, setLocale] = useAtom(localeAtom);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames(props.className, "locale-btn-wrapper")}>
            <button
                className={classNames("locale-btn", {
                    open: isOpen,
                })}
                // onClick=}
                onClick={() => setIsOpen(value => !value)}
            >
                {locale}
                <span className="material-symbols-outlined">
                    expand_more
                </span>
            </button>
            {isOpen
                ? <>
                    <hr />
                    {locales.map(el => (
                        <button onClick={() => {
                            setLocale(el);
                            setIsOpen(false);
                        }}>
                            {el}
                        </button>
                    ))}
                </>
                : null
            }
        </div >

    );
}
