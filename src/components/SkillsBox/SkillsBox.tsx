import React from 'react'
import './SkillsBox.css'
import SkillSlider from '../SkillSlider/SkillSlider'

const SkillsBox = (props:any) => {
  return (
    <div className='bento-card' style={{height: props.height}}>
        <div className="card-title">
            My Skills
        </div>
        <div className="skills-list">
            <SkillSlider />
        </div>
    </div>
  )
}

export default SkillsBox