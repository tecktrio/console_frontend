import React from 'react'
import { primary, primary_text } from '../../../Constants/Colors'
import './ButtonLink.css'
import { Link } from 'react-router-dom'
export default function ButtonLink(props) {
  return (
    <Link to={props.link}><div className='buttonlink_container'>{props.text}</div></Link>
  )
}
