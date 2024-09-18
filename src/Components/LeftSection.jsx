import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import Button from './Button';

function LeftSection() {
    useEffect(() => {
        Aos.init({
            offset:1,
        })
       }, [])
  return (
    <section className='left-section'>
      <h4 data-aos="fade-right" data-aos-duration="1400">#Cofee for hot days</h4>
      <h1 data-aos="zoom-in-left" data-aos-duration="1400" data-aos-delay="200"><span className='hyphen'>-</span> Cold Brew</h1>
      <p data-aos="fade-right" data-aos-duration="1400" data-aos-delay="300">Boots your productivity and build your mood with a glass of cofee in the morning.
        Cofee has a stimulating effect.
      </p>
      <br />
      <div className="pricing" data-aos="flip-down" data-aos-duration="1400" data-aos-delay="400">
      <Button>Order Now</Button>
      <h3>$16.00</h3>
      | <span id='regular'>Regular Price</span>
      </div>
      <div className="socials" >
        <a href="#" data-aos="fade-in" data-aos-duration="1400" data-aos-delay="600"><i className="ri-facebook-line"></i></a>
        <a href="#" data-aos="fade-in" data-aos-duration="1400" data-aos-delay="700"><i className="ri-youtube-line"></i></a>
        <a href="#" data-aos="fade-in" data-aos-duration="1400" data-aos-delay="800"><i className="ri-twitter-x-line"></i></a>
      </div>
    </section>
  )
}

export default LeftSection
