import React from 'react'
import './NButton.css'
import { primary, primary_text } from '../../../Constants/Colors'
export default function NButton(props) {
  return (
      <div className='nbutton_container'>
      <button style={{'backgroundColor':primary,'color':primary_text}} className='nbutton'><img src={props.src} alt='' className='nMenu_Icon'/>{props.text}</button>
    </div>
  )
}
