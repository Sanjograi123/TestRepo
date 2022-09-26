import React from "react"
import './label.css'

const Labels = ({labelName="Enter your label here"}) => {
  return (
    <div className="label-for-post">
        <h4>{labelName}</h4>
    </div>
   
  )

}

export default Labels
