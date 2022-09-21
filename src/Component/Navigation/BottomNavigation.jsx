import React from "react";
import { NavLink } from "react-router-dom";
import './BottomNav.css'

function BottomNavigation({NavData}) {
  return (
    <>
  

     <div className="main-container">
      <div className="BottomNav-container">
        {NavData.map((each,index)=>(
          <NavLink className={"navlinkClass"} to ={each.url} key={index}>
            {each.label}
          </NavLink>


        ))}
      </div>
     </div>
    </>
  );
}

export default BottomNavigation;
