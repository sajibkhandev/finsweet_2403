import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerImages from '../assets/banner.png'
import Button from '../components/Button'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from '../components/Image'

const Banner = () => {
  return (
    <section className='bg-primary py-[100px] md:py-[100px]'>
        <Container>
            <Flex className='!block md:!flex'>
                <div className='md:w-1/2'>
                    <h1 className=' text-[28px] sm:text-[40px] px-2 md:px-[0px] md:text-[54px] text-[#fff] font-pop font-semibold md:w-[582px]'>Building stellar websites for early startups</h1>
                    <p className='px-2 md:px-[0px] text-base text-[#fff] font-pop font-normal md:w-[562px] pt-4 md:pt-6 pb-[48px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='flex relative'>
                        <Button text='View our work'/>
                        <div className='group text-sm md:text-lg flex items-center justify-center text-[#fff] absolute top-[12px] left-[167px] md:top-[18px] md:left-[256px]'><a  href="">View Pricing</a><FaArrowRightLong className='absolute top-[6px] left-[85px] md:top-[8px] md:left-[112px] opacity-0 group-hover:opacity-100'/></div>
                    </div>
                </div>
                <div className='md:w-1/2'>
                 <Image className='px-2.5 pt-10' src={BannerImages}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner