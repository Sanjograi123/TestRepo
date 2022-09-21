import React from "react";
import BottomNavigation from "./BottomNavigation";
import { NavData } from "../../Static-Data/NavData";

import { FaSistrix } from "react-icons/fa";

import './TopNav.css';

const TopNavigation=() =>{
   return (
  
  <>
<nav >
  <div className="TopNav-Container">
  < div className="Navigation-Container">
    <div className="logo-Container">
      <img src="" className="mylogo" alt=""/>
    </div>
<div className="Search-bar-container">
 <div className="input-field">
 <input type={'text'} placeholder={'Search....'} className="Search"/>
  </div> 
  <div className="search-btn">
    <button className="btn-search"><FaSistrix/></button>
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
