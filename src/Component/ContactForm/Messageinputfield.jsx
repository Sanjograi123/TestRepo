import React from 'react'

const Messageinputfield= ({labelname}) => {
  return (
    <div className='message-input-field'>
      <h3 className='label-for-message-input-field'>{labelname}</h3>
      <textarea className='textarea-field' rows='20' cols={'60'} ></textarea>
      
      
    </div>
  )
}

export default Messageinputfield
