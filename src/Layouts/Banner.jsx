import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerImages from '../assets/banner.png'
import Button from '../components/Button'
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <section className='bg-primary py-[100px]'>
        <Container>
            <Flex>
                <div className='w-[50%]'>
                    <h1 className='text-[54px] text-[#fff] font-pop font-semibold w-[582px]'>Building stellar websites for early startups</h1>
                    <p className='text-base text-[#fff] font-pop font-normal w-[562px] pt-6 pb-12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='flex relative'>
                        <Button text='View our work'/>
                        <div className='flex items-center justify-center text-[#fff] absolute top-[18px] left-[256px] group'><a  href="">View Pricing</a><FaArrowRightLong className='absolute top-[6px] left-[100px] opacity-0 group-hover:opacity-100'/></div>
                    </div>
                </div>
                <div className='w-[50%]'>
                 <img src={BannerImages} alt="" />
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Banner