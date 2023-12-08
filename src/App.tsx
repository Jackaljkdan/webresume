import { Experience } from "./components/Experience";
import { SourceLink } from "./components/SourceLink";
import { Summary } from "./components/Summary";
import { UpdatedAt } from "./components/UpdatedAt";

function App() {
    return (
        <>
            <Summary className="pt-10 px-8 pb-4 sm:p-4 sm:flex-1 sm:min-w-[290px] sm:max-w-[383px]" />
            <Experience className="p-8 sm:pt-4 sm:flex-[2]" />
            <div className="absolute bottom-8 right-8 flex items-center">
                <SourceLink />
                <span className="mx-2"> | </span>
                <UpdatedAt />
            </div>
        </>
    );
}

export default App;
