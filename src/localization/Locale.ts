import strings from "./LocalizedStrings";

export type Locale = keyof typeof strings;

export const locales = Object.keys(strings) as Locale[];

export function getBrowserLocale(): Locale {
    // https://stackoverflow.com/questions/8199760/how-to-get-the-browser-language-using-javascript/8199791#8199791
    const browserLanguage = navigator.language || (navigator.userLanguage as string);
    
    if (browserLanguage.startsWith("it-"))
        return "it";
    else
        return "en";
}
