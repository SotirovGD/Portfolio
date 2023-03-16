import React from 'react'
import '../styles/Contact.css';
import PhoneIphoneTwoToneIcon from '@material-ui/icons/PhoneIphoneTwoTone';
import AlternateEmailTwoToneIcon from '@material-ui/icons/AlternateEmailTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';


// <FontAwesomeIcon icon="fab fa-viber" />

const Contact = () => {
  return (
    <div className='body-card'>



      <div className="card">
        <div className="card-header">
          <div className="card-header-bar">
            <h1 className='card-text'>I'd like to share some info about myself  </h1>
          </div>

          <div className="card-header-slanted-edge">
            <span class="sr-only">Follow</span>
          </div>
        </div>

        <div className="card-body">
          <h2 className="name">Georgi Sotirov</h2>
          <h4 className="job-title">Junior Developer</h4>
          

        </div>
        <div className="bio">
           <p>Date of Birth: 13 July 1985 </p> 
           <p>Place of Birth: Varna, Bulgaria</p> 
            
           <p>Nationality: 	bulgarian</p> 

            
          </div>

        <div className="card-footer">
          <div className="stats">
            <div className="phone">
              <span className="label"><PhoneIphoneTwoToneIcon /></span>
              <span className="value">+359 879 444 354</span>
            </div>
            <div className="email">
              <span className="label"><AlternateEmailTwoToneIcon/></span>
              <span className="value">dimitroff.85@hotmail.com</span>
            </div>
            <div className="town">
              <span className="label"><HomeTwoToneIcon/> </span>
              <span className="value">Sofia</span>
            </div>
            
          </div>
        </div>
      </div>




    </div>
  )
}

export default Contact