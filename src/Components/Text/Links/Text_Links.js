import React from 'react'
import './Text_Links.css'
import { Link } from 'react-router-dom'
export default function Text_Links(props) {
  return (
      <Link to={props.link} style={{'textDecoration':'none'}}><div className='text_links_a' style={{'color':'black'}} >{props.icon!=''?<img src={props.icon} style={{'height':'14px','margin':'0px 5px'}}/>:<></>}{props.text}</div></Link>
  )
}
