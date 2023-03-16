import React from 'react';
import '../styles/About.css';
import myPicture from '../assets/portfolio.png';


const About = () => {
  return (
    <div className='content'>
      <img src={myPicture} alt='Georgi Sotirov Portfolio ...' />

      <p className='p-adjust'>
        As a software developer, I have the opportunity and  the power to bring ideas to life and make a positive impact on the world.
        Every line of code I write has the potential to change lives, streamline processes, or even revolutionize industries.
        I know the work requires creativity, ingenuity, and problem-solving skills, making every day a new challenge and opportunity for growth.
        That's why I am not stopping to learn every single day.
        The satisfaction of seeing your work in action and making a real difference is unparalleled.
      </p>

    </div>
  )
}

export default About