import React from 'react'
import './ButtonLink.css'
import { Link } from 'react-router-dom'
import { primary, secondary } from '../../../Constants/Colors'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ButtonLink(props) {
  return (
    <Link 
    to={props.link} 
    style={{'textDecoration':'none'}}>
      <motion.div className='buttonlink_container' style={{'backgroundColor':primary,'color':secondary}} animate={{scale:1}} initial={{scale:0}}>
        {props.icon!=''?<img src={props.icon || <Skeleton/>}  className='buttonlink_image' style={{'filter': 'invert(1)'}}/>:<></>}
        <section className='buttonlink_container_mini'>
          {props.text!=''?props.text:<></>}
          {props.description!=''?<p style={{}}>{props.description }</p>:<></>}
        </section>
      </motion.div>
    </Link>
  )
}
