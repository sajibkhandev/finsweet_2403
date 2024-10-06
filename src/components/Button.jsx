import React from 'react'

const  Button = ({text,className}) => {
  return (
    <button className={`text-[#fff] font-pop  bg-transparent py-2.5 px-6 md:py-4 md:px-12 rounded-[40px] border-2 border-[#474974] hover:bg-[#FCD980] duration-300 ${className}`}>{text}</button>
  )
}

export default Button