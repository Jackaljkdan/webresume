import { useAtomValue } from "jotai";

import { localeAtom } from "../localization/LocaleAtom";
import { IconLinkButton } from "./IconLinkButton";
import downloadImg from "../assets/download.svg";

export function CvLinkButton() {
    const locale = useAtomValue(localeAtom);
    return (
        <IconLinkButton
            src={downloadImg}
            alt="download"
            href={`cv-${locale}.pdf`}
            text="CV"
        />
    );
}
