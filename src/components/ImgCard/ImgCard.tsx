import React from 'react'
import './ImgCard.css'
import my_img from '../../assets/my_img_3.jpg'

const ImgCard = (props:any) => {
  return (
    <div className='my-img bento-card overflow-hidden' style={{width: props.width}}>
        <img src={my_img} alt="" />
    </div>
  )
}

export default ImgCard