import React from 'react'
import './AccordionItem.css'
import { FaExternalLinkAlt } from "react-icons/fa";

const AccordionItem = (props:any) => {
  return (
    <div className='accordion-item flex flex-col'>
      <div className="accordian-title cursor-pointer flex justify-between items-center gap-4" onClick={props.onClick}>
        {props.title}
        <a href={props.url} target='_blank' rel="noreferrer">
        <span style={{fontSize: "1.1rem"}}><FaExternalLinkAlt /></span>
        </a>
      </div>
      {
        props.isOpen && (
          <div className="accordion-content flex flex-col">
              <div className='project-gif flex justify-center'>
                <img src={props.gif} alt="" />
              </div>
              <div className='project-desc'>
                <p>{props.desc}</p>
              </div>
          </div>
        )
      }
    </div>
  )
}

export default AccordionItem