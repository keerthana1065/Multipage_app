import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import Header from './Header'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Services from './Services'
import Testimonials from './Testimonials'
import Blog from './Blog'

function RouterPage() {
  return (

    <Router>
<Header/>
<Routes> 
<Route path='/' element={<Home/>}> </Route>
<Route path='/contact' element={<Contact/>}></Route>
<Route path='/about' element={<About/>}></Route>
<Route path='/services' element={<Services/>}></Route>
<Route path='/testimonial' element={<Testimonials/>}></Route>
<Route path='/blog' element={<Blog/>}></Route>

</Routes> 

    </Router>
  )
}

export default RouterPage