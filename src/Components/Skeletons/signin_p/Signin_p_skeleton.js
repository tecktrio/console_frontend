import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { motion } from 'framer-motion'
import './Signin_p_skeleton.css'

export default function Signin_p_skeleton() {
  return (
        <motion.div className='Signin_p_skeleton1' animate={{scale:1}} initial={{scale:0}} >

          <div className='Signin_p_skeleton2'>
            <div className='Signin_p_skeleton3'>
              <div style={{'display':'flex','justifyContent':'center'}}>
                <h2><Skeleton/></h2>
                
              </div>
              <p ><Skeleton/></p>
              <p><Skeleton/></p><br/>

              <p><Skeleton/></p>

              <p><Skeleton/></p> 
              <div className='Signin_p_skeleton4'>
                <p><Skeleton/></p>&nbsp;
                <p><Skeleton/></p> 
              </div><br/>
              <div className='Signin_p_skeleton5' >
                <p><Skeleton/></p> 
              </div>
            </div>
          </div>
        </motion.div>
    )
}
