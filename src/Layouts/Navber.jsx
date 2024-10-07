
import React, { useState } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Logo from '../assets/logo.png'
import List from '../components/List'
import Button from '../components/Button'
import { Link} from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import { HiBars4 } from 'react-icons/hi2'

const Navber = () => {
  let [show,setshow]=useState(false)

  let handleClick=()=>{
    setshow(!show)
  }

  let navber=<div className='lg:hidden bg-yellow-500 text-white w-full absolute top-[70px] left-0 z-10'>
           <ul className='flex flex-col  justify-center items-center gap-y-5 py-16'>
                <li>Home</li>
                <li>About us</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
                <li>Blog</li>
          </ul>
          <button className='bg-red-500 py-3 px-10 rounded'>Contact Us</button>
</div>
  return (
    <div className='bg-primary py-8 relative'>
      {
        show&& navber
      }
     
        <Container>
          <Flex className='items-center'>
            <div className='w-[25%] px-2.5 lg:px-0'>
                <img src={Logo} alt="" />
            </div>
            <div className=' hidden  lg:block w-[55%]'>
                <List/>
            </div>
            <div className='hidden lg:block w-[20%]'>
              <Link to='/contact'>  <Button text="Contact us"/></Link>
            </div>

          </Flex>
          <div onClick={handleClick} className='lg:hidden text-white text-3xl absolute top-[34px] right-[16px]'>
            {
              show?<RxCross2  className='text-xl'/>:<HiBars4  className='text-xl'/>
            }
            
            
          </div>
          
        </Container>
    </div>
  )
}

export default Navber