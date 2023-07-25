import React from 'react'
import './LoadingScreen.css'
import Loading from '../../assets/Loading/loading.gif'
export default function LoadingScreen() {
  return (
    <div className='loadingScreen'>
       <img src={Loading} alt='loading' className='loading'/>
      </div>
  )
}
