import React from 'react'
import Container from '../components/Container'
import CardFeatuer from '../components/CardFeatuer'
import Flex from '../components/Flex'
import Icon1 from '../assets/featuerIcon1.png'
import Icon2 from '../assets/featuerIcon2.png'
import Icon3 from '../assets/featuerIcon3.png'
import Icon4 from '../assets/featuerIcon4.png'
import Icon5 from '../assets/featuerIcon5.png'
import Icon6 from '../assets/featuerIcon6.png'

const Featuer = () => {
  return (
    <section className='bg-[#F4F6FC] py-p128'>
        <Container>
            <h6 className='text-center text-[#282938] text-base font-pop font-meduim'>Features</h6>
            <h2 className='text-center mx-auto text-[#282938] text-5xl font-pop font-semibold w-[548px] pt-3 pb-12'>Design that solves problems, one product at a time</h2>

          <Flex className='flex-wrap gap-x-[34px] gap-y-[34px]'>
           <CardFeatuer icon={Icon1} title="Uses Client First" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            <CardFeatuer icon={Icon2} title="Two Free Revision Round" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            <CardFeatuer icon={Icon3} title="Uses Client First" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            <CardFeatuer icon={Icon4} title="Uses Client First" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            <CardFeatuer icon={Icon5} title="Uses Client First" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
            <CardFeatuer icon={Icon6} title="Uses Client First" dec="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "/>
           
            
          </Flex>
        </Container>
    </section>
  )
}

export default Featuer