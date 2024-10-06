import React, { useState } from 'react'
import { FiPlus } from "react-icons/fi";
import { RxCross2 } from 'react-icons/rx';


const FAQ = ({number,title,dec}) => {
   
    let [show,setShow]=useState(false)
  
    let handleClick=()=>{
        setShow(!show)
        
      
        
    }

  
  return (
    <div className='py-8 px-4 border-b-2 border-[#ECECF1]'>
        <div className='flex justify-between '>
        <div className='flex gap-x-2.5 md:gap-x-[60px]'>
        <p className='text-[#2405F2] text-2xl font-pop font-medium'>{number}</p>
        <h2 onClick={handleClick} className='text-lg md:text-2xl font-pop font-medium cursor-pointer'>{title}</h2>
        </div>
        <div onClick={handleClick} className='cursor-pointer'>
            {
                show?
                <RxCross2 />
                :
                <FiPlus />
            }
            </div>
        </div>

        {
            show&&
            <p className='px-[30px] md:px-[84px] py-3 text-red-500'>{dec}</p>
        }
        

    </div>
  )
}

export default FAQ