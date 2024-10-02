import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Feature from './pages/Feature';
import Contact from './pages/Contact';
import FaqPages from './pages/FaqPages';
import Pricing from './pages/Pricing';

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path="/" element={<Home />}>  </Route>
    <Route path="/about" element={<About />}></Route>
    <Route path="/blog" element={<Blog />}></Route>
    <Route path="/feature" element={<Feature />}></Route>
    <Route path="/contact" element={<Contact />}></Route>
    <Route path="/faq" element={<FaqPages />}></Route>
    <Route path="/price" element={<Pricing />}></Route>
    
   </>
    
  )
);

const App = () => {
  return (
   <>
    <RouterProvider router={router} />
   
   </>
  )
}

export default App