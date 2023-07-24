import React from 'react'
import './ButtonLink.css'
import { Link } from 'react-router-dom'
import { primary, primary_text } from '../../../Constants/Colors'
import ICON from '../../../assets/Images/waving-hand.png'

export default function ButtonLink(props) {
  return (
    <Link to={props.link} style={{'textDecoration':'none'}}><div className='buttonlink_container' style={{'backgroundColor':primary,'color':primary_text}}><img src={ICON} style={{'width':'10%','margin':'0px 10px','color':'white'}}/>{props.text}</div></Link>
  )
}
