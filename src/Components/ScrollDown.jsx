import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";

function ScrollDown() {
    useEffect(() => {
        Aos.init({
            offset:1,
        })
       }, [])
  return (
    <div className='scroll' data-aos="zoom-out-down" data-aos-duration="1400" data-aos-delay="550">
      <a href="#"><i className="ri-scroll-to-bottom-line"></i></a>
    </div>
  )
}

export default ScrollDown
