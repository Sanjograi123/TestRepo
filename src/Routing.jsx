import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopNavigation from './Component/Navigation/TopNavigation'
import Home from './Pages/Home/Home'
import Politics from './Pages/Politics/Politics'
import Business from './Pages/Business/Business'
import Contact from './Pages/Contact/Contact'

function Routing() {
  return (
    <>   
    <TopNavigation/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/politics" element={<Politics/>}/>
      <Route path='/business' element={<Business/>}/>
<Route path='/contact' element={<Contact/>}/>
      
      
    </Routes>
    </>

  )
}

export default Routing