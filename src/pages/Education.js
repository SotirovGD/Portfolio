import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
}
  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';


const Experience = () => {
  return (
    <div className='experience'>

      <VerticalTimeline lineColor='#186665'>
        <VerticalTimelineElement className='vertical-timeline--education'
          date='08.2020 - up to now'
          icon={<SchoolIcon />}
          iconStyle={{ background: "#186665", color: "#fff" }}>
          <h2> Software University</h2>
          <p>Java, Spring, MySQL, JavaScript .. </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline--education'
          date='09.2010 – 11.2010'
          icon={<SchoolIcon />}
          iconStyle={{ background: "#186665", color: "#fff" }}>
            <h2>Certification as Dispencing Technician</h2>
            <p>at Cruzcampo, Madrid</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline--education'
          date='09.1999 – 08.2003'
          icon={<SchoolIcon />}
          iconStyle={{ background: "#186665", color: "#fff" }}>
          <h2>Secondary School I.E.S Num 3</h2>
          <p>Benidorm, Spain</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className='vertical-timeline--education'
          date='09.1992 – 07.1999'
          icon={<SchoolIcon />}
          iconStyle={{ background: "#186665", color: "#fff" }}>
            <h2>Ground School</h2>
            <p>Varna, Bulgaria</p>
        </VerticalTimelineElement>

        

      </VerticalTimeline>
    </div>
  )
}

export default Experience

/*
<VerticalTimelineElement 
        className='vertical-timeline--education'
        date='2010 - 2015'
        iconStyle={<SchoolIcon/>}>
          <h3 className='vertical-timeline-element-title'>
            Here comes my primary school in Varna 
          </h3>
          <h3 className='vertical-timeline-element-title'>
            Here comes my secondary school in Benidorm
          </h3>

        </VerticalTimelineElement>

*/