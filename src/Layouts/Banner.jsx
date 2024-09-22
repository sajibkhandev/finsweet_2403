import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerImages from '../assets/banner.png'
import Button from '../components/Button'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from '../components/Image'

const Banner = () => {
  return (
    <section className='bg-primary py-[100px]'>
        <Container>
            <Flex>
                <div className='w-1/2'>
                    <h1 className='text-[54px] text-[#fff] font-pop font-semibold w-[582px]'>Building stellar websites for early startups</h1>
                    <p className='text-base text-[#fff] font-pop font-normal w-[562px] pt-[24px] pb-[48px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='flex relative'>
                        <Button text='View our work'/>
                        <div className='group flex items-center justify-center text-[#fff] absolute top-[18px] left-[256px]'><a  href="">View Pricing</a><FaArrowRightLong className='absolute top-[6px] left-[100px] opacity-0 group-hover:opacity-100'/></div>
                    </div>
                </div>
                <div className='w-1/2'>
                 <Image src={BannerImages}/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner