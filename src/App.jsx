import Home from './Pages/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './Pages/AboutUs'
import { BrowserRouter } from 'react-router-dom'
import ContactUs from './Pages/ContactUs'
import Featurepage from './Pages/Featurepage'


function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<ContactUs/>}/>
          <Route path='/features' element={<Featurepage/>}/>
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
   
  )
}

export default App
