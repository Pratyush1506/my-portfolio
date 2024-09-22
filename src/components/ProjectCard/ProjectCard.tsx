import React from 'react'
import './ProjectCard.css'
import react_logo from '../../assets/react_logo_1.png'

const ProjectCard = (props:any) => {
  return (
    <div className='project-card my-2 flex flex-col py-3'>
        <div className="project-name">
            {props.name}
        </div>
        <div className="project-detail flex flex-row items-center gap-3">
            <div className="project-img flex flex-row justify-center">
                <img src={props.img} alt=""/>
            </div>
            <div className="project-desc">
                {props.desc}
            </div>
        </div>
    </div>
  )
}

export default ProjectCard