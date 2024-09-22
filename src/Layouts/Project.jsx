import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaArrowRightLong } from 'react-icons/fa6'
import Image from '../components/Image'
import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.png'

const Project = () => {
  return (
    <section className='py-p128'>
        <Container>
            <Flex className='justify-between '>
                <h2 className='text-5xl text-[#282938] font-pop font-semibold'>View our projects</h2>
                <div className='flex items-center gap-x-4'>
                    <h6 className='text-base text-[#282938] font-pop font-medium'>View More</h6>
                    <FaArrowRightLong/>
                </div>

            </Flex>

            <Flex className='mt-14' >
                <div className='w-8/12 relative group/main'>
                <Image src={Project1}/>
                <div className='pt-[312px] px-12 w-[0px] hidden group-hover/main:block group-hover/main:w-[52%] duration-500 h-full bg-gradient-to-r from-[#667199] to-[#1C1E53] opacity-85  absolute top-0 left-0'>
                    <h4 className='text-2xl text-white font-pop font-semibold w-[293px]'>Workhub office Webflow Webflow Design</h4>
                    <p className='text-base text-white font-pop font-medium w-[293px] pt-4 pb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga </p>
                    <div className='group/pain flex items-center justify-center text-[#FCD980] absolute top-[470px] left-[48px]'><a  href="">View Pricing</a><FaArrowRightLong className='absolute top-[6px] left-[100px] opacity-0 group-hover/pain:opacity-100'/></div>
                </div>
                

                </div>
                <div className='w-4/12 flex flex-col items-center justify-between'>
               
                <Image  src={Project2}/>
                <Image  src={Project3}/>
            
                </div>
            </Flex>


        </Container>
    </section>
  )
}

export default Project