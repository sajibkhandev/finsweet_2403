import React from 'react'
import Flex from './Flex'
import { Link } from 'react-router-dom'

const List = () => {
  return (
 
     <ul className='flex gap-x-[48px] text-base font-medium  font-pop cursor-pointer'>
      <Link to='/'><li className='text-[#BBBBCB] duration-500 hover:text-white'>Home</li></Link>
      <Link to='/about'><li className='text-[#BBBBCB] duration-500 hover:text-white'>About us</li></Link>
      <Link to='/feature'><li className='text-[#BBBBCB] duration-500 hover:text-white'>Features</li></Link>
      <Link to='/price'><li className='text-[#BBBBCB] duration-500 hover:text-white'>Pricing</li></Link>
      <Link to='/faq'><li className='text-[#BBBBCB] duration-500 hover:text-white'>FAQ</li></Link>
      <Link to='/blog'><li className='text-[#BBBBCB] duration-500 hover:text-white'>Blog</li></Link>
        
     </ul>
        
    
  
    
    
    
    
    
    
  )
}

export default List