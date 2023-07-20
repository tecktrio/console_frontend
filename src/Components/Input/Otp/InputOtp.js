import React, { useEffect, useState } from 'react'
import './InputOtp.css'
import { color_light_black } from '../../../Constants/Colors'

export function InputOtp(props) {

  const [otp,setotp] = useState('')


useEffect(()=>{

props.Getdata(otp);

},[otp])

const setotp_m = (event) =>{
  setotp(event.target.value)
}


  return (
    <div className='otp_input_container'>
        <label className='otp_input_label' style={{'color':color_light_black}}>{props.label}</label>
        <div className='otp_input_mini_container'>
          <input type='number' placeholder={props.placeholder} className='otp_input_input' onChange={setotp_m} />
        </div>
    </div>
  )
}

