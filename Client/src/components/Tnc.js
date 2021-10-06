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

const Tnc = () => {
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
                <div className="Tnc">
                    <div className="heading">
                        <div><i className="fa fa-file-text-o" aria-hidden="true"></i></div>
                        <div>
                            <h1>Terms and Conditions</h1>
                            <p>Updated on 20 August, 2021.</p>
                        </div>
                    </div>
                    <div className="body">
                        <div>
                            <h1>1. Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quidem tempore velit voluptatibus nesciunt placeat nostrum odio ad iure accusantium?</p>
                        </div>
                        <div>
                            <h1>2. Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quidem tempore velit voluptatibus nesciunt placeat nostrum odio ad iure accusantium?</p>
                        </div>
                        <div>
                            <h1>3. Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quidem tempore velit voluptatibus nesciunt placeat nostrum odio ad iure accusantium?</p>
                        </div>
                        <div>
                            <h1>4. Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quidem tempore velit voluptatibus nesciunt placeat nostrum odio ad iure accusantium?</p>
                        </div>
                        <div>
                            <h1>5. Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quidem tempore velit voluptatibus nesciunt placeat nostrum odio ad iure accusantium?</p>
                        </div>
                        <div>
                            <h1>6. Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quidem tempore velit voluptatibus nesciunt placeat nostrum odio ad iure accusantium?</p>
                        </div>
                        <div>
                            <h1>7. Lorem ipsum dolor sit amet.</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quidem tempore velit voluptatibus nesciunt placeat nostrum odio ad iure accusantium?</p>
                        </div>
                    </div>
                </div>
            </div>   
        </motion.article>
    );
}
 
export default Tnc;