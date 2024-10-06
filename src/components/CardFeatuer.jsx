import React from 'react'
import Image from '../components/Image'


const CardFeatuer = ({icon,title,dec}) => {
  return (
    <div className=' mx-2.5 md:mx-0 md:w-[404px] bg-white py-14 px-12 '>
        <Image src={icon}/>
        <h4 className='text-[#282938] text-2xl font-pop font-medium pt-6 pb-3'>{title}</h4>
        <p className='text-[#282938] text-base font-pop font-normal md:w-[324px]'>{dec}</p>
    </div>
  )
}

export default CardFeatuer