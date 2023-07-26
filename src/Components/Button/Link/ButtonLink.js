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
        {props.icon!=''?<img src={props.icon || <Skeleton/>} style={{'width':'10%','margin':'0px 10px','color':'white'}}/>:<></>}
        <section>
          {props.text!=''?props.text:<></>}
          {props.description!=''?<p style={{'width':'100%','font-size':'10px','textAlign':'center','margin':'0px','color':'white'}}>{props.description }</p>:<></>}
        </section>
      </motion.div>
    </Link>
  )
}
