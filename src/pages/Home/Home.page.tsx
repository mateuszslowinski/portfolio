import {motion} from "framer-motion";
import {Home} from "../../components/Home/Home";

export const HomePage = () => (
    <motion.div
        initial={{opacity: 0, y: 200}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: -200}}
        transition={{ease: 'easeInOut', duration: 1}}
    >
        <Home/>
    </motion.div>
)
