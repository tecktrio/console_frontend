import React from 'react'
import './Text_Error.css'
import { warning } from '../../../Constants/Colors'
export default function Text_Error(props) {
  return (
      <p className='text_error_p' style={{"color":warning}}>{props.text}</p>
  )
}
