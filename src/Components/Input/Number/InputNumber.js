import React, { useState } from 'react'
import './InputNumber.css'
import { color_light_black } from '../../../Constants/Colors'

export function   InputNumber(props) {

  const [state,setstate] = useState('')

  const update = (event)=>{
    setstate(event.target.value)
    props.Getdata(state)
  }

  return (
    <div className='number_input_container'>
        <label className='number_input_label' style={{'color':color_light_black}}>{props.label}</label>
        <input type='number' placeholder={props.placeholder} className='number_input_input' onChange={update}/>
    </div>
  )
}

