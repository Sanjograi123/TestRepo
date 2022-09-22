import React from 'react'
import { Route, Routes } from 'react-router-dom'
import TopNavigation from '../Component/Navigation/TopNavigation'
import Home from '../Pages/Home/Home'
import Politics from '../Pages/Politics/Politics'
import Business from '../Pages/Business/Business'
import Contact from '../Pages/Contact/Contact'
import Health from '../Pages/Health/Health'

function Routing() {
  return (
    <> 
    <h2>Merenda</h2> 
    <TopNavigation/>
  
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/politics" element={<Politics/>}/>
      <Route path='/business' element={<Business/>}/>
      < Route path='/health' element={<Health/>}/>
<Route path='/contact' element={<Contact/>}/> 
      {/* {NavData.map((each,index)=>(
        <Route path={each.url} element={each.label} />
        
        ))}
       */}
    </Routes>
    </>

  )
}

export default Routing;