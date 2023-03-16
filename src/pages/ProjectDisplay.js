import React from 'react';
import '../styles/ProjectDisplay.css';
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';


const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className='project'>
      <h2>{project.name}</h2>
      <img src={project.img} alt='project bild' />
      <p>{project.skills}</p>
      <IconButton href='https://github.com/SotirovGD'>
        <GitHubIcon />
      </IconButton>

    </div>
  )
}

export default ProjectDisplay