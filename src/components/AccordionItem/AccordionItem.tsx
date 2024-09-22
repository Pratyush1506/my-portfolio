import React from 'react'
import './AccordionItem.css'

const AccordionItem = (props:any) => {
  return (
    <div className='accordion-item flex flex-col'>
      <div className="accordian-title cursor-pointer flex items-center" onClick={props.onClick}>
        {props.title}
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