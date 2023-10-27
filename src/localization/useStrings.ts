import { useAtomValue } from "jotai";

import { localeAtom } from "./LocaleAtom";
import strings from "./LocalizedStrings";

export function useStrings() {
    const locale = useAtomValue(localeAtom);
    return strings[locale];
}