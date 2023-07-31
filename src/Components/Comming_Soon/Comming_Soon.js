import React from 'react'
import Comming_Soon_Icon from '../../assets/Loading/rocket.gif'
import './Comming_Soon.css'

export default function Comming_Soon() {
  return (
    <div className='comming_soon_container'>
      <img src={Comming_Soon_Icon}  className='comming_soon_image'/>
    </div>
  )
}
