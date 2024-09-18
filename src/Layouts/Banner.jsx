import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerImages from '../assets/banner.png'
import Button from '../components/Button'

const Banner = () => {
  return (
    <section className='bg-primary py-[100px]'>
        <Container>
            <Flex>
                <div className='w-[50%]'>
                    <h1 className='text-3xl'>Building stellar websites for early startups</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <div className='flex'>
                        <Button text='View our work'/>
                        <Button text='View our work'/>
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