import React from "react";
import cn from "classnames";
import {AnimatePresence, motion} from "framer-motion";
import {useMediaQuery} from "react-responsive";


const pageVariants = {
    initial: {
        color: "green"
    },
    in: {
        color: "green"
    },
    out: {
        color: "red"
    },
}


export const Section = ({animClass, children, hoverClass}) => {
    const isDesktop = useMediaQuery({query: '(min-width: 1024px)'})
    return (

            <section
                className={cn(`animated-section start-page ${animClass} ${isDesktop && hoverClass}`)}
                // initial={{ x: 1000 }}
                // animate={{ x: 0 }}
                // exit={{ x: -1000 }}
                // transition={{ duration: 1 }}
            >
                {children}
            </section>

    )
}

