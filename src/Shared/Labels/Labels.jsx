import React from "react";
import "./labels.css";
const Labels = ({ labelName="enter your label here" }) => {
  return (
    <>
     <div className="label-for-post">
      
      <label>{labelName}</label>

    </div>
    
    </>
   
  );
};

export default Labels;
