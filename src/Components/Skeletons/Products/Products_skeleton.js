import React, { useEffect, useState } from 'react'
import Text_paragraph_lite from '../../Text/Paragraph_lite/Text_paragraph_lite'
import './Products_skeleton.css'
import ButtonLink from '../../Button/Link/ButtonLink'
import Download_Icon from  '../../../assets/Images/downloads.png'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Products_skeleton() {
const product = ['','']
      return (

            <>
            {product.map((product) => (
              <>
            <motion.div className='Product_Main_Container_skeleton '  animate={{y:1}} initial={{y:100}}>
              <div className='Product_mini_container_skeleton'>
              <p style={{'width':'100%'}}><Skeleton/></p>
              <div>
                    <p style={{'width':'100%'}}><Skeleton/></p>
                    <p style={{'width':'100%'}}><Skeleton/></p>
              </div>
              </div>
              <div className='Product_Paragraph_skeleton'>
              <p style={{'width':'100%'}}><Skeleton/></p>
              </div>
              <div className='Product_Get_Button_skeleton'>
              <p style={{'width':'100%'}}><Skeleton/></p>
              </div>
            </motion.div>
            </>
            ))}
            </>
      )
    }
