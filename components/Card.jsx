import React from 'react'

function Card({title,varient}) {
  return (
    <div className={`${varient} box text-center bg-white rounded-md shadow-lg p-[30px]`}>
               <h3>Web Desinger</h3>
               <h2 className='text-primary text-[25px] font-bold'>{title}</h2>
               <span className='text-md text-gray-500'>Experience</span>
            </div>
  )
}

export default Card