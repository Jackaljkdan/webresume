import { atom } from "jotai";

import { getBrowserLocale } from "./Locale";

export const localeAtom = atom(getBrowserLocale());
