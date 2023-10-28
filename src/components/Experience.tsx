import classNames from "classnames";

import "./Experience.scss";
import { useStrings } from "../localization/useStrings";
import { Li } from "./Li";
import { ExperienceTitle } from "./ExperienceTitle";

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

            <ExperienceTitle
                title="Creepy Bug"
                from={strings.exp_endof + " 2022"}
                duration={"1 " + strings.exp_year}
            />
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

            <hr />

            <ExperienceTitle
                title="Melazeta"
                from={strings.exp_mid + " 2019"}
                duration={"3½ " + strings.exp_years}
            />
            <div>
                {strings.melaz_overview}
                <ul>
                    <Li>
                        {strings.melaz_react}
                        <ul>
                            <Li nested={true}>
                                Redux, Jotai, Luxon, React Navigation, React router
                            </Li>
                        </ul>
                    </Li>
                    <Li>
                        {strings.melaz_api}
                        <ul>
                            <Li nested={true}>
                                React Query
                            </Li>
                        </ul>
                    </Li>
                    <Li>
                        {strings.melaz_unity}
                    </Li>
                </ul>
            </div>

            <hr />

            <ExperienceTitle
                title="Just Funny Games"
                from={strings.exp_endof + " 2018"}
                duration={"6 " + strings.exp_months}
            />
            <div>
                {strings.jfg}.
            </div>

            <hr />


            <ExperienceTitle
                title={strings.uni_title}
                from={strings.exp_endof + " 2012"}
                duration={"5½ " + strings.exp_years}
            />
            <div className="uni">
                {strings.uni_degree}
                <ul>
                    <Li>
                        {strings.uni_thesis} <a href="https://amslaurea.unibo.it/16138/1/tesi%20Cortesi%20Daniele.pdf">Reinforcement Learning in Rogue</a>
                    </Li>
                    <Li>
                        Asperti, A., Cortesi, D., De Pieri, C., Pedrini, G., & Sovrano, F. (2019).
                        {" "}<a href="https://ieeexplore.ieee.org/abstract/document/8641337">Crawling in rogue's dungeons with deep reinforcement techniques.</a>
                        {" "}<i>IEEE Transactions on Games, 12</i>
                        (2), 177-186.
                    </Li>
                    <Li>
                        Asperti, A., Cortesi, D., & Sovrano, F. (2019).
                        {" "}<a href="https://arxiv.org/abs/1804.08685">Crawling in rogue’s dungeons with (partitioned) a3c.</a>
                        {" "}<i>In Machine Learning, Optimization, and Data Science: 4th International Conference, LOD 2018, Volterra, Italy, September 13-16, 2018, Revised Selected Papers 4 (pp. 264-275).</i>
                        {" "}Springer International Publishing.
                    </Li>
                </ul>
            </div>
        </div>
    );
}
