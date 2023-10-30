import { useAtomValue } from "jotai";

import { localeAtom } from "../localization/LocaleAtom";
import { MaterialLinkButton } from "./MaterialLinkButton";

export function CvLinkButton() {
    const locale = useAtomValue(localeAtom);
    return (
        <MaterialLinkButton
            href={`cv-${locale}.pdf`}
            symbol="download"
            text="CV"
        />
    );
}
