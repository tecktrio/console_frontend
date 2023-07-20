import React from 'react'
import { color_light_black } from '../../../Constants/Colors'
import './Input_Password_NoEdit.css'
export default function Input_Password_NoEdit(props) {
  return (
    <div className='Input_Password_NoEdit_container'>
        <label className='Input_Password_NoEdit_label' style={{'color':color_light_black}}>{props.label}</label>
        <input type='password' placeholder={props.placeholder} className='Input_Password_NoEdit_input'  value={props.text} readOnly/>
    </div>
  )
}
