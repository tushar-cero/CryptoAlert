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
    display: "block"
};

const About = () => {
    return ( 
        <motion.article 
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="container">
                <div className="About">
                    <p className="heading">About Amho</p>
                    <p className="about-detail">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto cum culpa temporibus itaque asperiores natus ea nisi aspernatur laborum error alias ut exercitationem, maxime totam doloremque tempora fugit dolor, enim quod porro dicta molestiae. Rem, repellat quidem quas deleniti excepturi voluptates at, veniam magni libero non, atque quam ducimus recusandae.</p>
                    <div className="btn-container"><Link to="/crypto"><span className="btn">Get Started</span></Link></div>
                </div>
                <section>
                    <h1>Advantages You get When you Join Us</h1>
                    <div className="advantage-grid">
                        <div className="advantage-card">
                            <div className="logo">
                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                            </div>
                            <h3>Fast Notifications</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptatum repellat voluptates nobis dolore animi?</p>
                        </div>
                        <div className="advantage-card">
                        <div className="logo">
                                <i className="fa fa-btc" aria-hidden="true"></i>
                            </div>
                            <h3>Real-time and Accurate Asset Prices</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit voluptatum repellat voluptates nobis dolore animi?</p>
                        </div>
                    </div>
                </section>
            </div>   
        </motion.article>
    );
}
 
export default About;