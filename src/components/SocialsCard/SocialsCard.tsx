import React from 'react'
import './SocialsCard.css'
import linkedin_logo from '../../assets/linkedin_logo.png';
import github_logo from '../../assets/github_logo.png';
import hackerrank_logo from '../../assets/hackerrank_logo.png';
import leetcode_logo from '../../assets/leetcode_logo.png';
import instagram_logo from '../../assets/instagram_logo.png';

const SocialsCard = (props:any) => {
  return (
    <div className='bento-card flex flex-row justify-evenly items-center' style={{height: props.height}}>
        <div className='logo'>
            <img src={linkedin_logo} alt="" />
        </div>
        <div className='logo'>
            <img src={github_logo} alt="" />
        </div>
        <div className='logo'>
            <img src={leetcode_logo} alt="" />
        </div>
        <div className='logo'>
            <img src={hackerrank_logo} alt="" />
        </div>
        <div className='logo'>
            <img src={instagram_logo} alt="" />
        </div>
    </div>
  )
}

export default SocialsCard