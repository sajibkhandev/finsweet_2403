import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Faqs from '../components/Faqs'
import { FaArrowRightLong } from 'react-icons/fa6'

const FaqSection = () => {
  return (
    
    <section className='py-[128px]'>
        <Container>
            <Flex>
                <div className='w-5/12 relative'>
                <h2 className='text-[#282938] text-[48px] font-pop font-semibold w-[340px]'>Frequently asked questions</h2>
                
                <div className='group flex items-center justify-center text-[#2405F2] absolute top-[162px] left-[0px]'><a  href="">Get in touch with us</a><FaArrowRightLong className='absolute top-[6px] left-[156px] opacity-0 group-hover:opacity-100'/></div>
                </div>
                <div className='w-7/12'>
                <Faqs/>
                </div>

            </Flex>
        </Container>
    </section>
  )
}

export default FaqSection