import React from 'react'
import "./Background.css"
const Background = ({color}) => {
  return (
    <>   <div className='back z-n1' style={{ backgroundColor: color}}></div>
   </>
 
  )
}

export default Background