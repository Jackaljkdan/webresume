import { Experience } from "./components/Experience";
import { LocaleButton } from "./components/LocaleButton";
import { Summary } from "./components/Summary";
import { UpdatedAt } from "./components/UpdatedAt";

function App() {
    return (
        <>
            <Summary className="pt-10 px-8 pb-4 sm:p-4 sm:min-w-[290px] sm:max-w-[390px]" />
            <Experience className="p-8" />
            <LocaleButton className="fixed top-8 right-8" />
            <UpdatedAt className="absolute bottom-8 right-8" />
        </>
    );
}

export default App;
