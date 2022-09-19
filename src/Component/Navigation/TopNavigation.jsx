import React from "react";
import BottomNavigation from "./BottomNavigation";
import './TopNav.css';

const TopNavigation=() =>{
  const NavData=[
    {
      label:"Home",
      url:"/",
    },
    
    
    {
      label:"Business",
      url:"/business",
    },
    
    {
      label:"Politics",
      url:"/politics",
    },
    
    {
      label:"Health",
      url:"/health",
    },
    
      ]
  return (
  
  <>
<nav >
  <div className="TopNav-Container">
  < div className="Navigation-Container">
    <div className="logo-Container">
      <img src="" className="mylogo"/>
    </div>
<div className="Search-bar-container">
 <div className="input-field">
 <input type={'text'} placeholder={'Search....'} className="Search"/>
  </div> 
  <div className="search-btn">
    <button>search</button>
  </div>
</div>

</div>
</div>
<div className="bottom-nav-bar">
  <BottomNavigation NavData={NavData}/>
</div>
</nav>
  
  
  </>


  )
}

export default TopNavigation;
