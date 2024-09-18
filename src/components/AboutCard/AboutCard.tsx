import React from 'react'
import './AboutCard.css'

const AboutCard = (props:any) => {
  return (
    <div className="bento-card flex flex-col gap-4" style={{width: props.width}}>
        <div className="card-title">
            Hey there! I'm Pratyush Jain
        </div>
        <div className="card-desc text-xl text-justify">
            A Full Stack Developer and competitive coder passionate about crafting impactful digital experiences. 
            With a B.E. in Electronics and Communication from BMS College, Bangalore, I thrive on problem-solving and creating innovative solutions. 
            Proficient in Java, MERN stack, Git, OOP, and DSA, I’m driven to build seamless user experiences. Outside of coding, you’ll find me in a 
            swimming pool or on a football field  or cycling through adventures. Always eager to learn and stay updated on tech trends, 
        <br />
            I’m excited to collaborate on exciting projects. Let’s connect and create something amazing!
        </div>
    </div>
  )
}

export default AboutCard