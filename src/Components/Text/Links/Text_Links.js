import React from 'react'
import './Text_Links.css'
import {color_Text_Link} from  '../../../Constants/Colors'
import { Link } from 'react-router-dom'
import ICON from '../../../assets/Images/th.jpeg'
export default function Text_Links(props) {
  return (
      <Link to={props.link} style={{'textDecoration':'none'}}><div className='text_links_a' style={{'color':'black'}} ><img src={ICON} style={{'width':'20px','margin':'0px 10px'}}/>{props.text}</div></Link>
  )
}
