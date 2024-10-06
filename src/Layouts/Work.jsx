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
    <section className='py-12 md:py-[128px] bg-[#F4F6FC]'>
        <Container>
            <Flex className='!block md:!flex'>
                <div className='md:w-5/12 relative'>
                <h2 className='px-2.5 md:px-[0px] text-[#282938] text-[28px] md:text-[48px] font-pop font-semibold'>How we work</h2>
                <p className='px-2.5 md:px-[0px] text-[#282938] text-sm md:text-base font-pop font-normal md:w-[405px] pt-[16px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <div className='group flex items-center justify-center text-[#2405F2] absolute top-[112px] left-[10px] md:top-[162px] md:left-[0px]'><a  href="">Get in touch with us</a><FaArrowRightLong className='absolute top-[6px] left-[156px] opacity-0 group-hover:opacity-100'/></div>
                </div>
                <div className='md:w-7/12 '>

               <div className='flex flex-wrap gap-y-12 pt-20 px-2.5 md:pt-0 md:px-0'>
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