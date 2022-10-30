import {motion} from "framer-motion";
import {Home} from "../../components/Home/Home";

export const HomePage = () => (
    <motion.div
        initial={{y: "100%"}}
        animate={{y: "0%"}}
        exit={{opacity: 1}}
        transition={{duration: 0.4, ease: 'easeOut'}}
    >
        <Home/>
    </motion.div>
)
