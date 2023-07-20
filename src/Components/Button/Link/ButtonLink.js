import React from 'react'
import { primary, primary_text } from '../../../Constants/Colors'
import './ButtonLink.css'
export default function ButtonLink(props) {
  return (
    <a className='buttonlink_container' href={props.link}>
        <button style={{'backgroundColor':primary,'color':primary_text}} className='buttonlink'>{props.text}</button>
    </a>
  )
}
