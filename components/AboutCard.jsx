import React from 'react'

function AboutCard({item}) {
  return (
    <div className='p-[50px] bg-white rounded-md drop-shadow-md flex space-x-3 items-center cursor-pointer hover:translate-y-[-8px] transition-all duration-300'>
       <h3 className='text-5xl text-primary font-bold'>{item.title}</h3>
       <span className='text-md text-light'>{item.desc}</span>
    </div>
  )
}

export default AboutCard