import classNames from "classnames";

import "./Experience.scss";
import { useStrings } from "../localization/useStrings";
import { Li } from "./Li";

type Props = {
    className?: string,
};

export function Experience(props: Props) {
    const strings = useStrings();
    return (
        <div className={classNames(props.className, "experience")}>
            <h1 className="title">
                {strings.exp}
            </h1>

            <hr />

            <h2>
                Creepy Bug
            </h2>
            <div>
                {strings.creepybug_dream}
                <ul>
                    <Li>
                        <a href="https://store.steampowered.com/app/2371160/When_God_Left_Us/">
                            When God Left Us
                        </a>
                    </Li>
                    <Li>
                        <a href="https://www.reddit.com/r/Unity3D/comments/14h03g5/hotline_miami_on_a_wheelchair/">
                            Hotline Miami on a Wheelchair
                        </a>
                    </Li>
                    <Li>
                        <a href="https://www.reddit.com/r/indiegames/comments/16sojcv/do_you_even_balance_bro/">
                            Do you even balance bro?
                        </a>
                    </Li>
                    <Li>
                        <a href="https://www.reddit.com/user/CreepyBug42/comments/13j6xst/making_games_until_one_goes_viral_episode_2/">
                            Dragon Egg Delivery Service
                        </a>
                    </Li>
                </ul>
            </div>

            <h2>
                Melazeta
            </h2>
            <div>
                {strings.melaz_overview}
                <ul>
                    <Li>
                        {strings.melaz_react}
                        <ul>
                            <Li>
                                Redux, Jotai, Luxon, React Navigation, ...
                            </Li>
                        </ul>
                    </Li>
                    <Li>
                        {strings.melaz_api}
                        <ul>
                            <Li>
                                React Query
                            </Li>
                        </ul>
                    </Li>
                    <Li>
                        {strings.melaz_unity}
                    </Li>
                </ul>
            </div>

            <h2>
                {strings.uni_title}
            </h2>
            <div>
                {strings.uni_degree}
            </div>
        </div>
    );
}
