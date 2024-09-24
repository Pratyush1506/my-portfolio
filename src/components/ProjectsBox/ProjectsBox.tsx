import React from 'react'
import './ProjectsBox.css'
import ProjectsAccordion from '../ProjectsAccordion/ProjectsAccordion';

const ProjectsBox = (props:any) => {


  return (
    <div className='bento-card' style={{height: props.height}}>
        <div className="card-title">
            My Work
        </div>
        <div className='projects-card-container'>

          <ProjectsAccordion />

          {/* <div className='card'>
              <div className='name text-3xl font-bold'>
                  <p>Kanban</p>
              </div>
              <div className='project-gif'>
                <img src={kanban_gif} alt="" />
              </div>
              <div className='desc'>
                  <p>{projectsDetails[0].desc}</p>
              </div>
          </div> */}
            
        </div>
        {/* <div className='more-projects flex justify-center items-center text-2xl cursor-pointer'>
          <p>Veiw my projects   </p>
        </div> */}
    </div>
  )
}

export default ProjectsBox