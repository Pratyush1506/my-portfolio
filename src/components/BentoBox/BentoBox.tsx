import React from 'react'
import CustomBox from '../CustomBox/CustomBox'
import './BentoBox.css'
import AboutCard from '../AboutCard/AboutCard'
import ExpCard from '../ExpCard/ExpCard'
import ProjectsBox from '../ProjectsBox/ProjectsBox'
import SkillSlider from '../SkillSlider/SkillSlider'
import SkillsBox from '../SkillsBox/SkillsBox'
import ImgCard from '../ImgCard/ImgCard'

const BentoBox = () => {
    

  return (
    <div className='main-container  flex flex-row mx-auto'>
        <div className='left-part flex flex-col'>
            <div className='upper-part h-1/2 flex flex-row'>
                <AboutCard width = "65%"/>
                {/* <CustomBox width="65%" content="About" /> */}
                {/* <CustomBox width="35%" content="Image" /> */}
                <ImgCard width="35%" />
            </div>
            <div className='lower-part h-1/2 flex flex-row'>
                <ExpCard width= "60%" />
                {/* <CustomBox width="50%" content="Professional Exp" /> */}
                <div className='skills-blogs flex flex-col' style={{width: "40%"}}>
                    <SkillsBox height="45%" />
                    {/* <SkillSlider /> */}
                    <CustomBox height="55%"  content="Blogs" />
                </div>
            </div>
        </div>
        <div className='right-part flex flex-col'>
            <ProjectsBox height="80%" />
            {/* <CustomBox height="80%"  content="Projects" /> */}
            <CustomBox height="20%" content="Socials" />
        </div>
    </div>
  )
}

export default BentoBox