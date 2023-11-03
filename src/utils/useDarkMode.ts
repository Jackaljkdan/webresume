import { SetStateAction, atom } from "jotai";

const valueAtom = atom(document.body.classList.contains("dark"));

export const darkModeAtom = atom(
    get => get(valueAtom),
    (get, set, action: SetStateAction<boolean>) => {
        set(valueAtom, action);
        if (get(valueAtom))
            document.body.classList.add("dark");
        else
            document.body.classList.remove("dark");
    },
);

// export function useDarkMode() {
//     const use = useAtom(valueAtom);
//     const [darkMode, set] = use;

//     console.log("is dark mode:", darkMode);

//     useEffect(
//         () => {
//             if (darkMode)
//                 document.body.classList.add("dark");
//             else
//                 document.body.classList.remove("dark");
//         },
//         [darkMode],
//     );

//     return use;
// }
