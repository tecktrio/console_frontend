import React from 'react'
import './Text_paragraph_lite.css'
import { dark_lite } from '../../../Constants/Colors'
import { motion } from 'framer-motion'
export default function Text_paragraph_lite(props) {
  return (
    <>
       <motion.p className='text_paragraph_lite widy_speak' style={{'color':dark_lite}} >{props.text}</motion.p>
       <script src ="https://cdn.jsdelivr.net/gh/widecity-developers/webspeak/widy_speak.js"></script>
    </>
  )
}
