import React from 'react'

const CustomBox = (props:any) => {
  return (
    <div className= 'm-2 flex items-center justify-center text-4xl ' style={{width: props.width, height: props.height, backgroundColor: "#F2F3AE"}}>
        <div className='text-center'>
            {props.content}
        </div>
    </div>
  )
}

export default CustomBox