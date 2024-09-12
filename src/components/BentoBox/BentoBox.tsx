import React from 'react'
import CustomBox from '../CustomBox/CustomBox'
import './BentoBox.css'
import AboutCard from '../AboutCard/AboutCard'

const BentoBox = () => {
    

  return (
    <div className='main-container  flex flex-row mx-auto'>
        <div className='left-part flex flex-col'>
            <div className='upper-part h-1/2 flex flex-row'>
                <AboutCard width = "65%"/>
                {/* <CustomBox width="65%" content="About" /> */}
                <CustomBox width="35%" content="Image" />
            </div>
            <div className='lower-part h-1/2 flex flex-row'>
                <CustomBox width="50%" content="Professional Exp" />
                <CustomBox width="50%" content="Blogs" />
            </div>
        </div>
        <div className='right-part flex flex-col'>
            <CustomBox height="80%"  content="Projects" />
            <CustomBox height="20%" content="Socials" />
        </div>
    </div>
  )
}

export default BentoBox