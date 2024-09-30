import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import ContactImage from '../assets/contact.png'
import Button from '../components/Button'
import { FaArrowRightLong } from 'react-icons/fa6'


const Contact = () => {
  return (
    <section>

        <Container>
            <Flex>
              <div className='w-1/2 relative group overflow-hidden'>
              <Image className='w-full h-full' src={ContactImage}/>
              <div className='w-full h-full bg-[#1c1e5380] group-hover:left-0 duration-500  absolute top-0 -left-[100%] py-[96px] px-[96px]'>
                <h2 className='text-[54px] text-white font-pop font-semibold w-[394px]'>Building stellar websites for early startups</h2>
                <p className='text-base text-white font-pop font-semibold w-[394px] pt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.</p>
              </div>
              </div>
              <div className='w-1/2 relative bg-[#1C1E53] py-[96px] px-[96px]'>
              <h4 className='text-[32px] text-white font-pop font-semibold'>Send inquiry</h4>
              <p className='text-base text-white font-pop font-semibold w-[432px] pt-4 pb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
              <input className='text-white text-2xl placeholder:text-red-[#F4F6FC] placeholder:text-base w-full my-2.5 py-[18px] px-8 bg-[#1C1E53] border-2 border-white opacite-50' type="text" placeholder='Your Name'/>
              <input className='text-white text-2xl placeholder:text-red-[#F4F6FC] placeholder:text-base w-full my-2.5 py-[18px] px-8 bg-[#1C1E53] border-2 border-white opacite-50' type="text" placeholder='Email'/>
              <input className='text-white text-2xl placeholder:text-red-[#F4F6FC] placeholder:text-base w-full my-2.5 py-[18px] px-8 bg-[#1C1E53] border-2 border-white opacite-50' type="text" placeholder='Paste your Figma design URL'/>
              <Button className='w-full mt-[50px]' text="Send an Inquiry"/>
              <div className='group flex items-center justify-center text-white text-2xl absolute bottom-[32px] left-[50%] -translate-x-1/2'><a  href="">Get in touch with us</a><FaArrowRightLong className='absolute top-[6px] left-[220px] opacity-0 group-hover:opacity-100'/></div>
              </div>

            </Flex>
        </Container>
    </section>
  )
}

export default Contact