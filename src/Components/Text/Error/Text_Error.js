import React from 'react'
import './Text_Error.css'
import { color_error } from '../../../Constants/Colors'
export default function Text_Error(props) {
  return (
      <p className='text_error_p' style={{"color":color_error}}>{props.text}</p>
  )
}
