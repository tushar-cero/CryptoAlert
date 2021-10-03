import { motion } from "framer-motion";
import { Link } from "react-router-dom"

const pageVariants = {
    initial: {
        opacity: 0,
        x: "+100vw",
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: "-100vw",
        scale: 1.2
    }
};
  
const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
};
  
const pageStyle = {
    position: "block"
};

const Error404 = () => {
    return ( 
        <motion.article 
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="Error">
                <div className="container">
                    <div className="info">
                        <p>Oops, I don't seem to find this page.</p>
                        <div className="btn-container">
                            <Link to="/"><span className="btn">Home</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}
 
export default Error404;