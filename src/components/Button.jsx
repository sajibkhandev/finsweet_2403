import React from 'react'

const  Button = ({text,className}) => {
  return (
    <button className={`text-[#fff] font-pop  bg-transparent py-[16px] px-[48px] rounded-[40px] border-2 border-[#474974] hover:bg-[#FCD980] duration-300 ${className}`}>{text}</button>
  )
}

export default Button