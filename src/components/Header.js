import logoImage from "../images/faviconlogo.png";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import {useState} from 'react';
import { Link } from "react-router-dom";


const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClose = () => setAnchorEl(null);
    const handleClick = event => setAnchorEl(event.currentTarget);

    return ( 
        <header>
            <div className="container">
                <div className="header-grid">
                    <div className="logo">
                        <Link to="/"><img src={logoImage} alt="Website Logo"/></Link>
                    </div>
                    <div className="menu">
                        <Button
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={handleClick}
                        ><i className="fa fa-bars"></i></Button>
                        <Menu
                            keepMounted
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            open={Boolean(anchorEl)}>
                            <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/about">About Us</Link></MenuItem>
                            <MenuItem onClick={handleClose}><Link to="/crypto">Crypto</Link></MenuItem>
                            {/*<MenuItem onClick={handleClose}><Link to="/premium">Premium</Link></MenuItem>*/}
                            <MenuItem onClick={handleClose}><Link to="/tnc">Terms & Policies</Link></MenuItem>
                        </Menu>
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Header;