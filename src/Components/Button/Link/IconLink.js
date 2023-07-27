import React from 'react'
import './ButtonLink.css'
import { Link } from 'react-router-dom'
import { primary, secondary } from '../../../Constants/Colors'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function IconLink(props) {
  return (
    <Link 
    to={props.link} 
    style={{'textDecoration':'none'}}>
      <motion.div className='' animate={{scale:1}} initial={{scale:0}}>
        {props.icon!=''?<img src={props.icon || <Skeleton/>} style={{'width':'30px','margin':'10px 20px','color':'white'}}/>:<></>}
      </motion.div>
    </Link>
  )
}
