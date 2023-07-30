import React from 'react'
import './Button_Delete.css'
import { danger, secondary } from '../../../Constants/Colors'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
function Button_Delete(props) {
  const navigate = useNavigate()
  const go= (()=>{
    navigate(props.navigate)
  })
  
  return (
 <div 
    style={{'textDecoration':'none'}} onClick={()=>{go()}}>
      <motion.div className='deletebutton_container' style={{'backgroundColor':danger,'color':secondary}} animate={{scale:1}} initial={{scale:0}}>
        {props.icon!=''?<img src={props.icon || <Skeleton/>}  className='deletebutton_image' style={{'filter': 'invert(1)'}}/>:<></>}

        <section style={{'display':'flex','alignItems':'center','margin':'0px','padding':'0px'}}>
          {props.text!=''?props.text:<></>}
          {props.description!=''?<p style={{}}>{props.description }</p>:<></>}
        </section>
      </motion.div>
    </div>
  )
}

export default Button_Delete
