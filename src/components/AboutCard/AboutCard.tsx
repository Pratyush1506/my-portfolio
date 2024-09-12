import React from 'react'
import './AboutCard.css'

const AboutCard = (props:any) => {
  return (
    <div className="bento-card m-2 p-4 px-6 flex flex-col gap-4" style={{width: props.width}}>
        <div className="card-title font-semibold">
            Hey there! I'm Pratyush Jain
        </div>
        <div className="card-desc text-xl text-justify">
            I'm Pratyush Jain, a Full Stack Developer, competitive coder, and passionate freelancer focused on creating impactful digital experiences. With a B.E. in Electronics and Communication Engineering from BMS College of Engineering, Bangalore, my journey in development has been fueled by a deep interest in problem-solving and coding.
            Skilled in Java, the MERN stack, Git, OOPS, and Data Structures & Algorithms (DSA), I’m dedicated to crafting exceptional user experiences and innovative solutions.
            Outside of coding, you’ll find me swimming, playing football, cycling, or exploring new sports. I’m always learning and staying updated with the latest tech trends.
        <br />
            Check out my work, and if you’re interested in collaborating on something extraordinary, let’s connect and build something amazing together!
        </div>
    </div>
  )
}

export default AboutCard