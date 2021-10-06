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

    /*-------------------- FETCHING DATA --------------------*/

    const [crypto, setCrypto] = useState([]);
    const getCryptoData = async () =>{
        await fetch('http://localhost:8000/info')
            .then(resp => {
                return resp.json();
            })
            .then(data => {
                setCrypto(data);
            });
    }
    useEffect(() => {
        getCryptoData();
    }, []);

    /*-------------------- DATA INPUT BY THE USER --------------------*/

    const [priceEnteredByTheUser, setpriceEnteredByTheUser] = useState('');
    const [emailEnteredByTheUser, setemailEnteredByTheUser] = useState('');

    /*-------------------- HANDLING and SENDING DATA --------------------*/

    var Storage = [];
    const addData = (p, c) => {
        //document.getElementById("CryptoCard").className = 'selectedCard';
        Storage.push({price: p, coin: c});
    }
    
    const handleSubmit = (email) =>{
        //e.preventDefault();

        Storage.email = email;
        console.log(Storage);
        // fetch('http://localhost:1000/data', {
        //         method: 'POST',
        //         headers: { "Content-Type": "application/json" },
        //         body: JSON.stringify(Storage)
        //     })
        //     .then(() => {
        //         alert("You will be notified as per your selections. Thanks You! Press OK to continue")
        //     })
        }

    /*-------------------- RETURN FUNCTION --------------------*/

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
                        {crypto.map((currentElement, index) => {
                            return(
                                <div id="CryptoCard" className="card" key={index}>
                                    <figure>
                                        <img src={currentElement.url} alt=""/>  
                                    </figure>
                                    <div className="info">
                                        <p className="name">{currentElement.name} ( {currentElement.coin} )</p>
                                        <p className="cost">₹ {currentElement.price}</p>
                                    </div>
                                    <div>
                                        <form>
                                            <input 
                                                type="number" 
                                                min="0" 
                                                placeholder="Enter desired amount"
                                                value={priceEnteredByTheUser}
                                                onChange={(e) => setpriceEnteredByTheUser(e.target.value)}
                                            />
                                        </form>
                                        <div className="card-btn-container">
                                            <button className="card-btn" onClick={addData(priceEnteredByTheUser, currentElement.coin)}>SELECT</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="email">
                        <div className="Email-Input">
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Enter Your Email"
                                value={emailEnteredByTheUser}
                                onChange={(e) => setemailEnteredByTheUser(e.target.value)}
                            />
                        </div>
                        <div className="btn-container">
                            <button onClick={handleSubmit(emailEnteredByTheUser)} className="btn">NOTIFY ME</button>
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