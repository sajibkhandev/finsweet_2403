import React from 'react'

import Navber from './Layouts/Navber'
import Banner from './Layouts/Banner'
import Work from './Layouts/Work'
import Project from './Layouts/Project'
import Featuer from './Layouts/Featuer'
import FAQ from './components/FAQ'
import Faqs from './components/Faqs'
import FaqSection from './Layouts/FaqSection'
import Contact from './Layouts/Contact'
import Foter from './Layouts/Foter'

const App = () => {
  return (
   <>
   <Navber/>
   <Banner/>
   <Work/>
   <Project/>
   <Featuer/>
   <FaqSection/>
   <Contact/>
   <Foter/>
   
   </>
  )
}

export default App