import React from 'react'
import './ProjectsBox.css'
import ProjectCard from '../ProjectCard/ProjectCard'
import kanban_logo from '../../assets/kanban_logo.png';
import hospitalfinder_logo from '../../assets/cross.png';
import boookstore_logo from '../../assets/mern-logo.png';

const ProjectsBox = (props:any) => {

  const projectsDetails = [
    {
      name: "Kanban",
      img: kanban_logo,
      desc: "The Kanban Board App is a React-based application that helps you manage tasks and projects efficiently.It allows you to create multiple boards, add and edit cards, and move cards between boards using drag-and-drop."
    },
    {
      name: "Hospital Finder",
      img: hospitalfinder_logo,
      desc: "The Hospital Finder App is a mobile app that helps users find nearby hospitals using their location. It uses Google Sign-In and requests location access for accurate results."
    },
    {
      name: "Bookstore",
      img: boookstore_logo,
      desc: "The Bookstore Application is a web application for managing book collections. It allows users to view, add, modify, and delete books. Built with the MERN stack, the app offers a user-friendly interface and efficient data management."
    }
  ]

  return (
    <div className='bento-card' style={{height: props.height}}>
        <div className="card-title">
            My Work
        </div>
        <div className='projects-card-container'>
            {
              projectsDetails.map((project, index) => (
                <ProjectCard key={index} name={project.name} img={project.img} desc={project.desc}/> 
              ))
            }

            {/* <ProjectCard />
            <ProjectCard />
            <ProjectCard /> */}
        </div>
        <div className='more-projects flex justify-center items-center text-2xl cursor-pointer'>
          <p>Veiw my projects   </p>
        </div>
    </div>
  )
}

export default ProjectsBox