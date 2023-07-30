import React from 'react'
import './Text_Heading_2.css'
export default function Text_Heading_2(props) {
  return (
    <div style={{'textAlign':'start','justifyContent':'start','display':'flex'}}>
      <p className='Text_Heading_2'>{props.text}</p>
    </div>
  )
}
