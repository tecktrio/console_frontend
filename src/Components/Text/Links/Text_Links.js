import React from 'react'
import './Text_Links.css'
import {color_Text_Link} from  '../../../Constants/Colors'
import { Link } from 'react-router-dom'
export default function Text_Links(props) {
  return (
    <div className='text_links_a' style={{'color':color_Text_Link}} >
      <Link to={props.link}>{props.text}</Link>
    </div>
  )
}
