import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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

const Crypto = () => {
    
    const [crypto, setCrypto] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/info')
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                setCrypto(data);
            });
    }, []);
    
    const handleSelect = (sendData) =>{
        console.log(sendData);   
        setValueEntered(null); 
    };

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Hello");
    }

    const [valueEntered, setValueEntered] = useState();

    return ( 

        <motion.article 
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div className="CryptoCurrency">
                <div className="container">
                    
                    <div className="grid">
                        {
                            crypto && crypto.forEach(eachCrypto => {

                                const sendData = {
                                    name : "eachCrypto.coin",
                                    price : "valueEntered",
                                    upper : valueEntered > eachCrypto.price // sends true if the value entered by the user is more than the current value
                                };

                                <div className="card">
                                    <figure>
                                        <img src={eachCrypto.url} alt=""/>  
                                    </figure>
                                    <div className="info">
                                        <p className="name">{eachCrypto.name} ( {eachCrypto.coin} )</p>
                                        <p className="cost">{eachCrypto.price}</p>
                                    </div>
                                    <div>
                                        <form onSubmit="">
                                            <input 
                                                type="number" 
                                                min="0" 
                                                placeholder="Enter desired amount"
                                                value = {valueEntered}
                                                onChange = {(e)=> setValueEntered(e.target.value)}
                                            />
                                        </form>
                                        <div className="card-btn-container">
                                            <button 
                                                onclick={handleSelect(sendData)} className="card-btn">SELECT</button>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>

                    <div className="email">
                        <div className="Email-Input">
                            <input type="email" name="email" placeholder="Enter Your Email"/>
                        </div>
                        <div className="btn-container">
                            <button onClick={handleSubmit} className="btn">NOTIFY ME</button>
                        </div>
                    </div>

                </div>
            </div>
        </motion.article>
    );
}
 
export default Crypto;

/*

<div className="selectedCard">
    <figure>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/BTC_Logo.svg" alt=""/>
    </figure>
    <div className="info">
        <p className="name">Bitcoin</p>
        <p className="cost">$59,627</p>
    </div>
    <div>
        <form action="">
            <input type="number" min="0" placeholder="Enter desired amount" required/>
        </form>
        <div className="card-btn-container">
            <button onclick={handleSelect} className="card-btn">SELECT</button>
        </div>
    </div>
</div>

*/