import React, { useEffect, useState } from 'react'
import './Input_Text.css'
import { dark_lite } from '../../../Constants/Colors'

export function   Input_Text(props) {

  const [state,setstate] = useState('')

  useEffect(()=>{
    try{
      props.Getdata(state);
    }
    catch{
      
    }
    
    // console.log(state)
  },[state])

  const update = (event)=>{
    setstate(event.target.value)
  }

  return (
    <div className='text_input_container'>
        <label className='text_input_label' style={{'color':dark_lite}}>{props.label}</label>
        <input type='text' placeholder={props.placeholder} className='text_input_input' onChange={update}/>
    </div>
  )
}

