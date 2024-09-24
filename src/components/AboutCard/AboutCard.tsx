import React from 'react'
import './AboutCard.css'
import hand_wave from '../../assets/hand_wave.png';

const AboutCard = (props:any) => {
  return (
    <div className="bento-card flex flex-col gap-4" style={{width: props.width}}>
        <div className="my-name flex felx-row items-center">
            Hey there! I'm Pratyush Jain <span><img src={hand_wave}  alt="" /></span>
        </div>
        <div className="card-desc text-xl text-justify items-center">
          Full Stack Developer and competitive coder passionate about crafting digital experiences. With a B.E. in Electronics and 
          Communication from BMS College, Bangalore, I excel in problem-solving and building innovative solutions. Proficient in Java, 
          MERN stack, Git, OOP, and DSA, I focus on seamless user experiences. Outside of coding, I enjoy swimming, football, and cycling. 
          Always eager to learn and explore new tech trends.
        <br />
          Let’s connect on exciting projects!
        </div>
    </div>
  )
}

export default AboutCard