import React from 'react'
import './ExpCard.css'
import philips_logo from '../../assets/philips_logo.png';
import laptop_logo from '../../assets/laptop_logo.png'

const ExpCard = (props:any) => {
  return (
    <div className='bento-card flex flex-col gap-3' style={{width: props.width}}>
        <div className="card-title">
            Professional Experience
        </div>
        <div className="card-desc text-justify flex flex-col justify-evenly">
            <div className="company-exp">
                <div className='flex flex-row items-center gap-3 font-semibold'>
                    <img src={philips_logo} alt="" style={{width: "2rem"}}/> Philips India Limited
                </div>
                <div className='exp-list'>
                    <ul style={{listStyleType: "disc"}}>
                        <li>
                            Enhanced the Phillips Guide Health Service app by developing over 30 UI/UX components, 
                            implementing dynamic PDF features, and resolving 30+ bugs. Led manual testing for critical features to ensure robust 
                            functionality.
                        </li>
                        <li>
                            <span>Tech Stack : </span> React Js, TypeScript, JavaScript, Git, Azure
                        </li>
                    </ul>
                </div>
            </div>
            <div className="freelance-exp">
                <div className='flex flex-row items-center gap-3 font-semibold'>
                    <img src={laptop_logo} alt="" style={{width: "2rem"}}/> Freelance
                </div>
                <div className='exp-list'>
                <ul style={{listStyleType: "disc"}}>
                        <li>
                            Completed a custom landing page for a marketing agency and personal projects, while expanding expertise in 
                            React frameworks, improving Git skills, and demonstrating strong time management and project delivery.
                        </li>
                        <li>
                            <span>Tech Stack : </span> React Js, React Native,Next Js, TypeScript, JavaScript, Git.
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ExpCard