import React from 'react'
import Buttonwithtext from '../../Shared/Inputfield/Buttonwithtext'
import Inputwithlabel from '../../Shared/Inputfield/Inputwithlabel'
import Labels from '../../Shared/Labels/Labels'
import './Contact.css'
function Contact() {
  return (
    <div className='contact-form-container'>
      <div className='contact-us'>
      <Labels labelName='Contact-US'/>
      </div>
      <div className='contact-form-main-container'>
        <div className='fname-lname-container'>

              <div className='first-name-container'>
              
              <Inputwithlabel labelname ={"First Name"} inputType={'text'} placeHolder={"First Name"}/>
              </div>
              <div className='last-name-container'>
              <Inputwithlabel labelname={"Last Name"} inputType={'text'} placeHolder={"Last Name"}/>
            </div>
        </div>
              <div className='email-tel-container'>
              <div className='email-container'>
              <Inputwithlabel labelname={"E-mail"} inputType={'email'} placeHolder={"Email address here!!"}/>
            </div>
            <div className='tel-container'>
              <Inputwithlabel labelname={"Tel.no"} inputType={'tel'} placeHolder={""}/>
            </div>
              </div>
              <div className='message-button-container'>
                <div className='message-container'>
                  <Inputwithlabel labelname={"Message"} inputType={'text'} placeHolder="" className='message-container' styles={{fontSize:'20em'}}/>
                </div>
                <div className='button-container'>
                  <Buttonwithtext buttonType={"submit"} buttonText={"Send Message"}/>
                </div>
              
              </div>
        
      </div>
        

    </div>
  )
}

export default Contact