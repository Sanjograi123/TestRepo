import React from "react";
import BottomNavigation from "./BottomNavigation";
import { NavData } from "../../Static-Data/NavData";

import { FaSistrix } from "react-icons/fa";

import './TopNav.css';
import Inputfield from "../../Shared/Inputfield/Inputfield";
import ButtonWithIcon from "../../Shared/Inputfield/ButtonWithicon";

const TopNavigation=() =>{
   return (
  
  <>
<nav >
  <div className="TopNav-Container">
      <div className="logo-Container">
      <h2>Meranda</h2>
      <img src="" className="mylogo" alt=""/>
      <div className="input-field-search-btn-container">
        
              <Inputfield inputType={'text'} setplaceholder="Search...."/>
              
                <ButtonWithIcon icon={<FaSistrix fontSize={"large"}/>} />
  
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
