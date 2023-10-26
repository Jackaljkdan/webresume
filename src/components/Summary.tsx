import "./Summary.css";
import { MyPicture } from "./MyPicture";

type Props = {
    className?: string,
};

export function Summary(props: Props) {
    return (
        <div className={`${props.className} summary`}>
            <MyPicture />
            <h3 className="my-name">
                Daniele Cortesi
            </h3>
        </div>
    );
}
