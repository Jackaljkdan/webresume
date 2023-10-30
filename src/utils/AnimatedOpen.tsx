import classNames from "classnames";
import useMeasure from "react-use-measure";
import { animated, useSpring } from "@react-spring/web";

type Props = {
    isOpen: boolean,
    wrapperClassName?: string,
    contentClassName?: string,
    children: React.ReactNode,
};

export function AnimatedOpen(props: Props) {
    const [ref, { height: targetHeight }] = useMeasure();

    const spring = useSpring({
        from: { height: 0, opacity: 0 },
        to: { height: props.isOpen ? targetHeight : 0, opacity: props.isOpen ? 1 : 0 },
    });

    return (
        <animated.div
            className={classNames(props.wrapperClassName)}
            style={spring}
        >
            <animated.div
                className={props.contentClassName}
                ref={ref}
            >
                {props.children}
            </animated.div>
        </animated.div>
    );
}
