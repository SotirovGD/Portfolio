import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

import { IconButton } from '@material-ui/core';

import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <IconButton href='https://www.instagram.com/'>
          <InstagramIcon />
        </IconButton>

        <IconButton href='https://twitter.com/'>
          <TwitterIcon />
        </IconButton>

        <IconButton href='https://www.facebook.com/gogo.soti.52'>
          <FacebookIcon />
        </IconButton>


      </div>
      <p> 2023 SotirovGD </p>
      <p> Special thanks to - StackOverflow, GitHub, W3Schools, GeeksForGeeks  </p>
    </div>
  )
}

export default Footer