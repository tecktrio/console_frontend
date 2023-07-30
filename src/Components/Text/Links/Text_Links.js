import React from 'react'
import './Text_Links.css'
import { Link } from 'react-router-dom'
export default function Text_Links(props) {
  return (
      <Link to={props.link} style={{'textDecoration':'none'}}><div className='text_links_a' >{props.icon!=''?<img src={props.icon} className='textlink_image'/>:<></>}{props.text}</div></Link>
  )
}
