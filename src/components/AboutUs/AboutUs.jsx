import React from 'react'
import './AboutUs.css'
import Ishan from "../../Assets/ishan.jpeg"
import Kiran from '../../Assets/kiranpreet.jpeg'
import Dhruv from '../../Assets/Dhruv.jpg'
import Varun from '../../Assets/Varun.jpeg'

const AboutUs = () => {
  return (
    <div className="header-container">
      <h2>ABOUT US</h2>
      <p>Our team has tried to make the software to help the youth and the already existing startups to get boost for their company using our app. We were motivated througout our project journey and had some serious boost of knowledge with making this project. We had some new challenges while making this but we eventually tried our best to overcome those and kept on working.</p>
      <div className="about-container">
          
        <div className="card-container">
          <img className='images' src= {Ishan} alt="person-1" />
          <h3 className='title'>Prashasta Ishan</h3>
          <h4 className='profession'>React Dev</h4>
        </div>
        <div className="card-container">
          <img className='images' src= {Dhruv} alt="person-1" />
          <h3 className='title'>Dhruv Aggarwal</h3>
          <h4 className='profession'>React Dev</h4>
        </div>
        <div className="card-container">
          <img className='images' src= {Kiran} alt="person-1" />
          <h3 className='title'>Kiranpreet Sethi</h3>
          <h4 className='profession'>Backend Dev</h4>
        </div>
        <div className="card-container">
          <img className='images' src= {Varun} alt="person-1" />
          <h3 className='title'>Varun Arora</h3>
          <h4 className='profession'>Backend Dev</h4>
        </div>

      </div>
    </div>  
  )
}

export default AboutUs