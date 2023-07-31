import React, { useEffect, useState } from 'react'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import Text_paragraph_lite from '../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import './Products.css'
import ButtonLink from '../../Components/Button/Link/ButtonLink'
import Download_Icon from  '../../assets/Images/download.svg'
import { motion } from 'framer-motion'
import 'react-loading-skeleton/dist/skeleton.css'
import QucikvoteIcon from '../../assets/ProductImages/Quickvote/logo.jpg'
import AcademyIcon from '../../assets/ProductImages/Academy/logo.jpg'
import Footer from '../../Components/Footer/Footer'
export default function Products() {
      // variables
      // const [product,setproduct] = useState([])
      const product = [{'Icon':QucikvoteIcon,'Name':'QucikVote','Description':'Quick Vote is an online voting system that can help you to conduct election in an easy way.','Installs':'52','Documentation':'https://docs.widecity.in/index.html'},
      {'Icon':AcademyIcon,'Name':'Academy','Description':'Widecity Academy helps students to learn different topic from the world in no time.','Installs':'55','Documentation':'https://docs.widecity.in/generic.html'}]
      const [isLoading,setisLoading] = useState(true)
      // useEffect Method 
      // useEffect(()=>{
      //   let url = core_url+'/products'
      //   axios.get(url).then((response)=>
      //   {
      //     setproduct(response.data['data'])
      //     setisLoading(false)
      //   })
      //   .catch(()=>
      //   {
      //     console.log('server error')
      //   })
      // },[])
      // return jsx
      return (
        <div>
            <div style={{'display':'inline'}}>
            <Text_Heading_2 text='Released Products'/>
            <Text_paragraph_lite text='All the new released products of widecity will be officialy available over here.'/>
            </div>
            <div  className='Product_Main_ContainerM '>
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
                  <ButtonLink text='Learn' link={product.Documentation} icon={Download_Icon} description=''/>
                  </div>
                </motion.div>
                ))}
              </div>
            </div>
      )
    }
