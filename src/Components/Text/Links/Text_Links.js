import React from 'react'
import './Text_Links.css'
import {color_Text_Link} from  '../../../Constants/Colors'
export default function Text_Links(props) {
  return (
    <a className='text_links_a' style={{'color':color_Text_Link}} href={props.link}>{props.text}
    </a>
  )
}
