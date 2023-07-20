import React from 'react'
import './Button_Submit.css'
import { submit_button, submit_button_text } from '../../../Constants/Colors'
export function Button_Submit(props) {
  return (
    <div>
      <button className='submit_button' style={{'backgroundColor':submit_button}}>
        <p className='submit_button_text' style={{'color':submit_button_text}}>
        {props.text}
        </p>
      </button>
    </div>
  )
}


