import React from 'react'

const CustomBox = (props:any) => {
  return (
    <div className= 'bento-card m-2 flex items-center justify-center text-4xl ' style={{width: props.width, height: props.height}}>
        <div className='text-center'>
            {props.content}
        </div>
    </div>
  )
}

export default CustomBox