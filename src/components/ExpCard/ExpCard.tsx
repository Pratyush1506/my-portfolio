import React from 'react'
import './ExpCard.css'

const ExpCard = (props:any) => {
  return (
    <div className='bento-card flex flex-col gap-3' style={{width: props.width}}>
        <div className="card-title">
            Professional Experience
        </div>
        <div className="card-desc text-justify flex flex-col justify-evenly gap-4">
            <div className="company-exp">
                <span className='font-medium'>Philips India Limited</span>- I played a key role in the development of a Healthcare app. I enhanced user experience and 
                visual appeal by creating over 30 UI/UX components, implemented dynamic PDF generation features, and resolved more than 
                30 bugs to ensure application stability. My responsibilities also included leading manual testing for critical features, 
                ensuring comprehensive functionality and reliability.
            </div>
            <div className="freelance-exp">
                <span className='font-medium'>Freelancer</span>- I completed diverse projects including a customized landing page for a marketing agency and developed personal projects.
                I expanded my expertise in React frameworks such as Next.js and React Native, honed my skills in version control with Git,
                and demonstrated strong time management and project delivery capabilities.
            </div>
        </div>
    </div>
  )
}

export default ExpCard