import React, { useEffect, useState } from 'react'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import Text_paragraph_lite from '../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import './Products.css'
import ButtonLink from '../../Components/Button/Link/ButtonLink'
import Download_Icon from  '../../assets/Images/downloads.png'
import axios from 'axios'
import { core_url } from '../../Constants/Variables'
import LoadingScreen from '../../Components/LoadingScreen/LoadingScreen'
import { motion } from 'framer-motion'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Products_skeleton from '../../Components/Skeletons/Products/Products_skeleton'

export default function Products() {
      // variables
      const [product,setproduct] = useState([])
      const [isLoading,setisLoading] = useState(true)
      // useEffect Method 
      useEffect(()=>{
        let url = core_url+'/products'
        axios.get(url).then((response)=>
        {
          setproduct(response.data['data'])
          setisLoading(false)
        })
        .catch(()=>
        {
          console.log('server error')
        })
      },[])
      // return jsx
      return (
        <>
          {!isLoading?
            <>
            {product.map((product) => (
            <motion.div className='Product_Main_Container '  animate={{y:1}} initial={{y:100}}>
              <div className='Product_mini_container'>
                  <img src={product.Icon} alt='image' className='Product_image'/>
                  <div>
                      <Text_Heading_2 text={product.Name}/>
                      <Text_paragraph_lite text={product.Installs+'+ Installs'}/>
                  </div>
              </div>
              <div className='Product_Paragraph'>
                  <Text_paragraph_lite text={product.Description}/>
              </div>
              <div className='Product_Get_Button'>
              <ButtonLink text='Learn' link={product.Documentation} icon={Download_Icon}/>
              </div>
            </motion.div>
            ))}
            </>
          :
          <Products_skeleton/>   
          }
      </>
      )
    }
