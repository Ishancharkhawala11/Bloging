import React from 'react'
import Card from '../../Componant/Card/Card'
import "./Show_card.css"
const Showcard = () => {
  
  return (
    
    <div className='Card overflow-hidden'>
   
       <div className="container-sm mt-5 w-75 space">
    <h1 className='text-center'>Blog Cards</h1>
    <div className="row mt-5">
     
      <Card />
    
    </div>
  </div>
  </div>
  
   
  )
}

export default Showcard