import React from 'react'
import Navber from '../Layouts/Navber'
import Banner from '../Layouts/Banner'
import Contact from '../Layouts/Contact'
import FaqSection from '../Layouts/FaqSection'
import Work from '../Layouts/Work'
import Project from '../Layouts/Project'
import Foter from '../Layouts/Foter'
import Featuer from '../Layouts/Featuer'

const Home = () => {
  return (
    <div>
        <Navber/>
        <Banner/>
        <Work/>
        <Project/>
        <Featuer/>
        <FaqSection/>
        <Contact/>
        <Foter/>

    </div>
  )
}

export default Home