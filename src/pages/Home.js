import React from 'react';
import { Link } from 'react-router-dom';

import RecentActorsSharpIcon from '@material-ui/icons/RecentActorsSharp';
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedinIcon from '@material-ui/icons/LinkedIn';

import { IconButton } from '@material-ui/core';

import '../styles/Home.css';




const Home = () => {




    return (
        <div className='home'>

            <div className='about'>

                <h2>Hi, My name is Georgi</h2>
                <div className='prompt'>
                    <p>and I am a junior Software Developer ...</p>

                    <IconButton>
                        <a href='https://github.com/SotirovGD' target="_blank"  >
                            <GithubIcon />
                        </a>
                    </IconButton>



                    <IconButton>
                        <Link to='/contact'> <RecentActorsSharpIcon /> </Link>
                    </IconButton>

                    <IconButton >
                        <a href='https://www.linkedin.com/in/georgi-sotirov-a785a7207/'target="_blank">
                            <LinkedinIcon />
                        </a>
                    </IconButton>

                </div>
            </div>
            <div className='skills'>
                <h2>Skills</h2>
                <ol className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>
                            ReactJS, HTML, CSS, Angular-[inProgress], Bootstrap
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Back-End</h2>
                        <span> Java-Spring, MySQL, ExpressJS-[inProgress] </span>
                    </li>
                    <h2>Coding</h2>
                    <li className='item'>
                        <span>Java-[Basics, Fundamentals,Advanced], JavaScript-[Fundamentals, Advanced]
                            Python-[Basics]
                        </span>
                    </li>

                    <li className='item'>
                        <h2>Languages</h2>
                        <span>Bulgarian: Native language</span><br />
                        <span>Spanish: second Native language</span><br />
                        <span>German: expert and advanced language skills</span><br />
                        <span>English: expert and advanced language skills</span><br />
                    </li>

                </ol>

            </div>
        </div>
    )
}

export default Home