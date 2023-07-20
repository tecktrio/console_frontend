import React from 'react'
import './Button_Delete.css'
import { delete_button, delete_button_text } from '../../../Constants/Colors'
function Button_Delete() {
  return (
    <div>
      <button className='delete_button' style={{'backgroundColor':delete_button}}>
        <p className='delete_button_text' style={{'color':delete_button_text}}>
        Delete
        </p>
      </button>
    </div>
  )
}

export default Button_Delete
