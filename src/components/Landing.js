import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const Landing = () => {
    return ( 
        <motion.article 
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="Landing">
                <div className="container">
                    <h1>Amho</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consectetur saepe animi sed nam ipsa modi error maxime quibusdam quidem quod magnam veritatis dolorum sunt perspiciatis aliquid, optio quae ad deleniti.</p>
                    <div className="btn-container">
                        <Link to="/about"><span className="btn">Discover More</span></Link>
                    </div>
                </div>
                <div className="bgi"></div>
            </div>   
        </motion.article>
    );
}
 
export default Landing;