import React from 'react'
import './SkillSlider.css'
import react_logo from '../../assets/react_logo.png';
import java_logo from '../../assets/java_logo.png';
import css_logo from '../../assets/css_logo.png';
import express_logo from '../../assets/express_logo.png';
import git_logo from '../../assets/git_logo.png';
import html_logo from '../../assets/html_logo.png';
import js_logo from '../../assets/js_logo.png';
import mongodb_logo from '../../assets/mongodb_logo.png';
import sql_logo from '../../assets/sql_logo.png';
import node_logo from '../../assets/node_logo.png';
import ts_logo from '../../assets/ts_logo.png';

const SkillSlider = (props:any) => {
  return (
    <div className='wrapper mt-4' style={{height: props.height}}>
        <div className="item item1">
            <img src={java_logo} alt="" />
            <p className="skill-name">Java</p>
        </div>
        <div className="item item2">
            <img src={mongodb_logo} alt="" />
            <p className="skill-name">MongoDB</p>
        </div>
        <div className="item item3">
            <img src={express_logo} alt="" />
            <p className="skill-name">Express Js</p>
        </div>
        <div className="item item4">
            <img src={react_logo} alt="" />
            <p className="skill-name">React Js</p>
        </div>
        <div className="item item5">
            <img src={node_logo} alt="" />
            <p className="skill-name">Node Js</p>
        </div>
        <div className="item item6">
            <img src={git_logo} alt="" />
            <p className="skill-name">Git</p>
        </div>
        <div className="item item7">
            <img src={html_logo} alt="" />
            <p className="skill-name">HTML</p>
        </div>
        <div className="item item8">
            <img src={css_logo} alt="" />
            <p className="skill-name">CSS</p>
        </div>
    </div>
  )
}

export default SkillSlider