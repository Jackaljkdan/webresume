import classNames from "classnames";
import React from "react";
import useMeasure from "react-use-measure";
import { AnimationConfig, animated, useSpring } from "@react-spring/web";

type Props = {
    isOpen: boolean,
    wrapperClassName?: string,
    contentClassName?: string,
    springConfig?: Partial<AnimationConfig>,
    element?: keyof JSX.IntrinsicElements,
    children: React.ReactNode,
};

export function AnimatedOpen(props: Props) {
    const [ref, { height: targetHeight }] = useMeasure();

    const spring = useSpring({
        from: { height: 0, opacity: 0 },
        to: { height: props.isOpen ? targetHeight : 0, opacity: props.isOpen ? 1 : 0 },
        config: props.springConfig,
    });

    const wrapper = React.createElement(
        props.element ?? "div",
        {
            className: props.contentClassName,
            ref: ref,
        },
        props.children,
    );

    return (
        <animated.div
            className={classNames(props.wrapperClassName)}
            style={spring}
            children={wrapper}
            aria-expanded={!props.isOpen}
        />
    );
}
