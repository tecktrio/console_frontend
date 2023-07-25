import React, { useEffect, useState } from 'react'
import { dark_lite } from '../../../Constants/Colors'
import './Input_Password.css'
export default function Input_Password(props) {

  const [state,setstate] = useState('')
  useEffect(()=>{ props.Getdata(state);},[state])

  const update = (event)=>{
    setstate(event.target.value)
   
  }

  return (
    <div className='input_password_container'>
        <label className='input_password_label' style={{'color':dark_lite}}>{props.label}</label>
        <input type='password' placeholder={props.placeholder} className='password_input_input' onChange={update}/>
    </div>
  )
}
