import React from 'react'
import './Button_Submit.css'
import { primary, secondary } from '../../../Constants/Colors'
export function Button_Submit(props) {
  return (
    <div>
      <button className='submit_button' style={{'backgroundColor':primary}}>
        <p className='submit_button_text' style={{'color':secondary}}>
        {props.text}
        </p>
      </button>
    </div>
  )
}


