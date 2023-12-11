import classNames from "classnames";

import { useStrings } from "../localization/useStrings";
import { Li } from "./Li";
import { ExperienceTitle } from "./ExperienceTitle";

type Props = {
    className?: string,
};

export function Experience(props: Props) {
    const strings = useStrings();
    return (
        <main className={classNames(
            props.className,
        )}>
            <h2 className="text-accent">
                {strings.exp}
            </h2>

            <hr className="my-10" />

            <section>
                <ExperienceTitle
                    title="Creepy Bug"
                    from={strings.exp_endof + " 2022"}
                    duration={"1 " + strings.exp_year + " - " + strings.exp_ongoing}
                />
                <p>
                    {strings.creepybug_dream}
                </p>
                <ul className="my-4">
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
            </section>

            <hr className="my-10" />

            <section>
                <ExperienceTitle
                    title="Melazeta"
                    from={strings.exp_mid + " 2019"}
                    duration={"3+ " + strings.exp_years}
                />
                <p>
                    {strings.melaz_overview}
                </p>
                <ul className="my-4">
                    <Li>
                        {strings.melaz_react}
                        <ul>
                            <Li nested={true}>
                                Redux, Jotai, Luxon, React Navigation, React Router
                            </Li>
                        </ul>
                    </Li>
                    <Li>
                        {strings.melaz_api}
                        <ul>
                            <Li nested={true}>
                                React/TanStack Query
                            </Li>
                        </ul>
                    </Li>
                    <Li>
                        {strings.melaz_unity}
                    </Li>
                </ul>
            </section>

            <hr className="my-10" />

            <section>
                <ExperienceTitle
                    title="Just Funny Games"
                    from={strings.exp_endof + " 2018"}
                    duration={"6 " + strings.exp_months}
                />
                <p>
                    {strings.jfg}.
                </p>
            </section>

            <hr className="my-10" />

            <section>
                <ExperienceTitle
                    title={strings.uni_title}
                    from={strings.exp_endof + " 2012"}
                    duration={"5+ " + strings.exp_years}
                />
                <p>
                    {strings.uni_degree}
                </p>
                <ul className="my-4">
                    <Li className="mb-4">
                        {strings.uni_grade}
                    </Li>
                    <Li className="mb-4">
                        {strings.uni_thesis} <a href="https://amslaurea.unibo.it/16138/1/tesi%20Cortesi%20Daniele.pdf">Reinforcement Learning in Rogue</a>
                    </Li>
                    <Li className="mb-4">
                        Asperti, A., Cortesi, D., De Pieri, C., Pedrini, G., & Sovrano, F. (2019).
                        {" "}<a href="https://ieeexplore.ieee.org/abstract/document/8641337">Crawling in rogue's dungeons with deep reinforcement techniques.</a>
                        {" "}<i>IEEE Transactions on Games, 12</i>
                        (2), 177-186.
                    </Li>
                    <Li className="mb-4">
                        Asperti, A., Cortesi, D., & Sovrano, F. (2019).
                        {" "}<a href="https://arxiv.org/abs/1804.08685">Crawling in rogue’s dungeons with (partitioned) a3c.</a>
                        {" "}<i>In Machine Learning, Optimization, and Data Science: 4th International Conference, LOD 2018, Volterra, Italy, September 13-16, 2018, Revised Selected Papers 4 (pp. 264-275).</i>
                        {" "}Springer International Publishing.
                    </Li>
                </ul>
            </section>
        </main>
    );
}
