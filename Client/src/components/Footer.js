import { Link } from "react-router-dom";
import logoImage from "../images/logo.png";

const Footer = () => {
    return ( 
        <footer>
            <div className="container">
                <div className="footer-grid">
                    <div className="logo">
                    <Link to="/"><img src={logoImage} alt="Website Logo"/></Link>
                    </div>
                    <div>
                        <p>Amho &copy; 2021 - Present. All Rights Reserved.</p>
                    </div>
                </div>
                <div className="footer-grid">
                    <div>
                        <ul>
                            <li className="link-head">Services</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><a href="https://instagram.com/prakhar0jha?utm_medium=copy_link">Contact Us</a></li>
                            <li><Link to="/tnc">Policies and Conditions</Link></li>
                        </ul>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li><a href="https://www.github.com"><i className="fa fa-github"></i></a></li>
                            <li><a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://www.instagram.com"><i className="fa fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="disclaimer">
                    <p>The purpose of this website is solely to display information regarding the products and services available in the Cypto Market. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on their respective websites and other Wallet Services.</p>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;