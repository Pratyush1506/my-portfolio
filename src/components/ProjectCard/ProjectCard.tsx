import React from 'react'
import './ProjectCard.css'
import react_logo from '../../assets/react_logo_1.png'

const ProjectCard = () => {
  return (
    <div className='project-card my-2 flex flex-col gap-3'>
        <div className="project-name">
            Kanban Board
        </div>
        <div className="project-detail flex flex-row items-center gap-2">
            <div className="project-img" style={{width: "20rem"}}>
                <img src={react_logo} alt="" width={100}/>
            </div>
            <div className="project-desc">
                The Kanban Board App is a React-based application that helps you manage tasks and projects efficiently. 
                It allows you to create multiple boards, add and edit cards, and move cards between boards using drag-and-drop.
            </div>
        </div>
    </div>
  )
}

export default ProjectCard