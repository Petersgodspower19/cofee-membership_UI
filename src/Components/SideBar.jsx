import React, { useState } from 'react';
import Button from './Button';
import { useAppContext } from '../context';
import Aos from 'aos';
import "aos/dist/aos.css";

function SideBar() {
    const { dispatch } = useAppContext();
    const [isClosing, setIsClosing] = useState(false); 

    const handleClose = () => {
        setIsClosing(true); 

        
        setTimeout(() => {
            dispatch({ type: "CLOSE" });
        }, 600); 
    };

    return (
        <div
            className={`sideBar ${isClosing ? 'fade-out' : ''}`}  
            data-aos="fade-right"
            data-aos-duration="600"
        >
            <a href="#" onClick={handleClose}><i className="ri-close-large-line"></i></a>
            <ul className='nav-list'>
                <li>About</li>
                <li>Membership</li>
                <li>Event</li>
                <li>Contact</li>
            </ul>
            <Button>Sign In</Button>
        </div>
    );
}

export default SideBar;
