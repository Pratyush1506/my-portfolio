import React from 'react'
import './ProjectsBox.css'
import ProjectCard from '../ProjectCard/ProjectCard'

const ProjectsBox = (props:any) => {
  return (
    <div className='bento-card' style={{height: props.height}}>
        <div className="card-title">
            My Work
        </div>
        <div className='projects-card-container'>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
    </div>
  )
}

export default ProjectsBox