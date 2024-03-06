import React from 'react'

function Button({title,varient}) {
  return (
    <button className={`${varient} cursor-pointer rounded-md text-[16px] transition-all duration-300 hover:bg-transparent text-white hover:text-dark`}>{title}</button>
  )
}

export default Button