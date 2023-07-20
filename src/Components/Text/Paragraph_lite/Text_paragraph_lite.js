import React from 'react'
import './Text_paragraph_lite.css'
import { color_light_black } from '../../../Constants/Colors'
export default function Text_paragraph_lite(props) {
  return (
    <>
       <p className='text_paragraph_lite widy_speak' style={{'color':color_light_black}}>{props.text}</p>
       <script src ="https://cdn.jsdelivr.net/gh/widecity-developers/webspeak/widy_speak.js"></script>
    </>
  )
}
