import React, { useEffect } from 'react'
import hero from "../assets/hero.png";
import Aos from 'aos';
import "aos/dist/aos.css";
import ScrollDown from './ScrollDown';

function RightSection() {
   useEffect(() => {
    Aos.init({
        offset:1,
    })
   }, [])

  return (
    <div className='right-section'>
      <img data-aos="zoom-in" data-aos-duration="1400"  src={hero} alt="" />
      <ScrollDown />
    </div>
  )
}

export default RightSection
