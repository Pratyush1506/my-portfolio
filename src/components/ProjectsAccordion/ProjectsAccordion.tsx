import React, { useState } from 'react'
import './ProjectsAccordion.css'
import AccordionItem from '../AccordionItem/AccordionItem';
import kanban_logo from '../../assets/kanban_logo.png';
import hospitalfinder_gif from '../../assets/hospital_finder.gif';
import boookstore_gif from '../../assets/bookstore.gif';
import kanban_gif from '../../assets/kanban_gif.gif';
import { url } from 'inspector';

const ProjectsAccordion = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const handleClick = (index:any) => {
    setOpenIndex(index === openIndex ? null : index);
  }

  const projectsDetails = [
    {
      name: "Kanban",
      img: kanban_gif,
      desc: "The Kanban Board App is a React-based application that helps you manage tasks and projects efficiently.It allows you to create multiple boards, add and edit cards, and move cards between boards using drag-and-drop.",
      url: "https://pratyush1506.github.io/kanban/"
    },
    {
      name: "Hospital Finder",
      img: hospitalfinder_gif,
      desc: "The Hospital Finder App is a mobile app that helps users find nearby hospitals using their location. It uses Google Sign-In and requests location access for accurate results.",
      url: "https://github.com/Pratyush1506/map-app"
    },
    {
      name: "Bookstore",
      img: boookstore_gif,
      desc: "The Bookstore Application is a web application for managing book collections. It allows users to view, add, modify, and delete books. Built with the MERN stack, the app offers a user-friendly interface and efficient data management.",
      url: "https://github.com/Pratyush1506/BookStore-MERN"
    }
  ]

  return (
    <div className='accordion'>
      {
        projectsDetails.map((item, index) => (
          <AccordionItem 
            key={index}
            title={item.name}
            gif={item.img}
            desc={item.desc}
            url={item.url}
            isOpen={openIndex === index}
            onClick={() => handleClick(index)}
          />
        ))
      }
    </div>
  )
}

export default ProjectsAccordion