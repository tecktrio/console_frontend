import React from 'react'
import './Button_Add.css'
import { add_button, add_button_text } from '../../../Constants/Colors'
function Button_Add() {
  return (
    <div>
      <button className='add_button' style={{'backgroundColor':add_button}}>
        <p className='add_button_text' style={{'color':add_button_text}}>
        Add
        </p>
      </button>
    </div>
  )
}

export default Button_Add
