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
        <IconButton >
          <a href='https://www.instagram.com/' target="_blank">
            <InstagramIcon />
          </a>
        </IconButton>

        <IconButton >
          <a href='https://twitter.com/' target="_blank">
            <TwitterIcon />
          </a>
        </IconButton>


        <IconButton >
          <a href='https://www.facebook.com/gogo.soti.52' target="_blank">
            <FacebookIcon />
          </a>
        </IconButton>


      </div>
      <p> 2023 SotirovGD </p>
      <p> Special thanks to - StackOverflow, GitHub, W3Schools, GeeksForGeeks  </p>
    </div>
  )
}

export default Footer