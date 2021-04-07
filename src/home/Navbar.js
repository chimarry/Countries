import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faBars, faGlobe, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import { Button } from '../common/Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        Globe
                        <FontAwesomeIcon icon={faGlobe} />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ?
                            <FontAwesomeIcon icon={faTimes} /> :
                            <FontAwesomeIcon icon={faBars} />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/countries' className="nav-links" onClick={closeMobileMenu}>
                                Countries
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/maps' className="nav-links" onClick={closeMobileMenu} >
                                Google Maps
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/sign-up' className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign up </Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
