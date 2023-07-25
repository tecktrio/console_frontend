import React from 'react'
import './ButtonLink.css'
import { Link } from 'react-router-dom'
import { primary, secondary } from '../../../Constants/Colors'

export default function ButtonLink(props) {
  return (
    <Link to={props.link} style={{'textDecoration':'none'}}><div className='buttonlink_container' style={{'backgroundColor':primary,'color':secondary}}><img src={props.icon} style={{'width':'10%','margin':'0px 10px','color':'white'}}/>{props.text}</div></Link>
  )
}
