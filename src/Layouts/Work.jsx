import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaArrowRightLong } from 'react-icons/fa6'
import CardWork from '../components/CardWork'

import Icon1 from '../assets/workIcon1.png'
import Icon2 from '../assets/workIcon2.png'
import Icon3 from '../assets/workIcon3.png'
import Icon4 from '../assets/workIcon4.png'

const Work = () => {
   
    
  return (
    <section className='py-[128px] bg-[#F4F6FC]'>
        <Container>
            <Flex>
                <div className='w-5/12 relative'>
                <h2 className='text-[#282938] text-[48px] font-pop font-semibold'>How we work</h2>
                <p className='text-[#282938] text-base font-pop font-normal w-[405px] pt-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className='group flex items-center justify-center text-[#2405F2] absolute top-[162px] left-[0px]'><a  href="">Get in touch with us</a><FaArrowRightLong className='absolute top-[6px] left-[156px] opacity-0 group-hover:opacity-100'/></div>
                </div>
                <div className='w-7/12 '>

               <div className='flex flex-wrap gap-y-12'>
               <CardWork icon={Icon1} title="Strategy" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <CardWork icon={Icon4} title="Wireframing" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <CardWork icon={Icon3} title="Strategy" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
                <CardWork icon={Icon2} title="Strategy" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
               </div>
                
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Work