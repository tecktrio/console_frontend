import React from 'react'
import './Text_Error.css'
import { warning } from '../../../Constants/Colors'
import { motion } from "framer-motion"

export default function Text_Error(props) {
  return (
      <motion.p className='text_error_p'  animate={{scale:1}} initial={{scale:0}} style={{"color":warning}}>{props.text}</motion.p>
  )
}
