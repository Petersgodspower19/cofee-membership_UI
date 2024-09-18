import React from 'react'
import logo from "../assets/logo.png";
import Button from './Button';
import { useAppContext } from '../context';

function Header() {
    const {isisSideBarShowing, dispatch} = useAppContext();

    // function showSideBar() {
    //      dispatch({type: "OPEN"});
    // }
  return (
    <header>
        <img src={logo} alt="" id='logo' />
         <ul className='nav-list'>
            <li>About</li>
            <li>Membership</li>
            <li>Event</li>
            <li>Contact</li>
         </ul>
         <Button>
            Sign In
         </Button>
         <a href="#" className='menu' onClick={() => dispatch({type: "OPEN"})}><i className="ri-menu-line"></i></a>
    </header>
  )
}

export default Header
