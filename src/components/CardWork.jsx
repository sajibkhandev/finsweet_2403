import React from 'react'


const CardWork = ({icon,title,dec}) => {
  return (
    <div className=''>

        <img src={icon} alt="" />

        <h4 className='text-[32px] text-[#000] font-pop font-medium pt-[8px] pb-[16px]'>{title}</h4>
        <p className='text-base text-[#000] font-pop font-normal w-[303px]'>{dec}</p>

    </div>
  )
}

export default CardWork