import React from 'react'
import {
    VerticalTimeline,
    VerticalTimelineElement
}
    from 'react-vertical-timeline-component';
import WorkIcon from '@material-ui/icons/Work';


// className="vertical-timeline-element--work"
//background: "#3e497a", color: "#fff"

const Experience = () => {
    return (
        <div className='experience'>
            <VerticalTimeline lineColor='#186665'>

            <VerticalTimelineElement className='vertical-time-line--work'
                    date='04.2014 – 08.2020'
                    icon={<WorkIcon />}
                    iconStyle={{ background: "#186665", color: "#fff" }}>
                    <h2> Brewery Dispencing Technician </h2>
                    <p>Postmix & Beer</p>
                    <p>Bien S.A.T.(Pepsi-Germany), Mannheim</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-time-line--work'
                    date='02.2009 – 08.2012'
                    icon={<WorkIcon />}
                    iconStyle={{ background: "#186665", color: "#fff" }}
                >
                    <h2> Brewery Dispencing Technician </h2>
                    <p>Beer</p>
                    <p>Refrival S.A. – Heineken-Cruzcampo</p>
                    <p>Benidorm, Spain</p>

                </VerticalTimelineElement>

                <VerticalTimelineElement className='vertical-time-line--work'
                    date='09.2005 – 01.2009'
                    icon={<WorkIcon />}
                    iconStyle={{ background: "#186665", color: "#fff" }}>
                    <h2>Electrical and Air conditioning installations</h2>
                    <p>M.A.S. Energia – Iberdrola S.A.</p>
                    <p>Benidorm, Spain</p>

                </VerticalTimelineElement>

                

                <VerticalTimelineElement className='vertical-time-line--work'
                    date='2004 - 2005'
                    icon={<WorkIcon />}
                    iconStyle={{ background: "#186665", color: "#fff" }}>

                    <h3>Visual Home - Real State Agency</h3>
                    <p>Benidorm, Spain</p>

                </VerticalTimelineElement>

            </VerticalTimeline>

        </div>
    )
}

export default Experience