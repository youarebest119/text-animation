import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const List = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const variants = {
        initial: {
            y: "100%",
        },
        animate: {
            y: "0%",
        },
    }
    return (
        <>
            <ul ref={ref}>
                {
                    Array.from({ length: 5 }).map((item, index) => {
                        return (
                            <li key={String(item) + index}>
                                <motion.div
                                    variants={variants}
                                    initial={"initial"}
                                    animate={isInView ? "animate" : ""}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                >
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit.
                                </motion.div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default List
