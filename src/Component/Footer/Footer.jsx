import React from 'react'
import ButtonWithIcon from '../../Shared/Inputfield/ButtonWithicon'
import Inputfield from '../../Shared/Inputfield/Inputfield'
import './Footer.css'
import {FiSend} from 'react-icons/fi'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-main-container'>
        
            <div className='Newsletter-container'>
                <h1>Newsletter Subscribe</h1>
                <p className='details-newsletter'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                     Excepturi architecto officiis ullam voluptates esse! Corporis 
                     accusamus consequatur itaque in perferendis nostrum ea at, natus, 
                     tenetur dolorem
                     laboriosam! Voluptates, veritatis ipsam?</p>
                </div>
                <div className='mail-container'>
                    <Inputfield inputType={'email'} setplaceholder={'Enter your E-mail'}/>
                <ButtonWithIcon icon={<FiSend size={"1.6em"} border-radius={"1em"}/> } />

                </div>
               </div>
            </div>
        
      
    
  )
}

export default Footer
