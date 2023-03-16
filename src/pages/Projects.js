import React from 'react'
import ProjectItems from './ProjectItems';
import "../styles/Projects.css";
import { ProjectList } from '../helpers/ProjectList';

const Projects = () => {
  return (
    <div className='projects'>
      <h1 className='project-text'>My projects</h1>
      <div className='projectList'>
      
       {ProjectList.map((project, index) => {
        return <ProjectItems id={index} name={project.name} img={project.img}/>
       })}
      
      </div>
      
    </div>
  )
}

export default Projects

/*
 <ProjectItems name='Project Name Here' img={aiHand} />
      <ProjectItems name='Project Name Here' img={camera}/>
      <ProjectItems name='Project Name Here' img={hardware}/>
      <ProjectItems name='Project Name Here' img={hdd}/>
      <ProjectItems name='Project Name Here' img={pic1}/>
*/
// --------------------------------------
/*
<div className='projecList'>
       {ProjectList.map((project) => {
        return <ProjectItems name={project.name} img={project.img}/>
       })}
      </div>
*/