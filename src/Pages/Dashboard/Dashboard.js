import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import Text_paragraph_lite from '../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import illustration from '../../assets/Images/4045264.jpg'
import ButtonLink from '../../Components/Button/Link/ButtonLink'
import axios from 'axios'
import { core_url } from '../../Constants/Variables'
import GetCookieValue from '../../Components/HandleCookie/GetCookie/GetCookieValue'
import { motion
 } from 'framer-motion'
import Footer from '../../Components/Footer/Footer'
import Text_Heading_1 from '../../Components/Text/Heading_1/Text_Heading_1'
export default function Dashboard() {
  
    // functions senddata
    const [data,setdata] = useState([])
    const sendData = () => {
      console.log('requesting')
      const Email = GetCookieValue('userEmail')
      let url = core_url+'/handleuserproducts/'+Email
      axios.get(url)
      .then(response => {
      setdata(response.data['data']);
      console.log(response.data['data'])
      })
      .catch(error => {
      console.error('Error:', error);
      });
    };
    useEffect(()=>{sendData()},[])

    const MyProducts = data
  return (
      <motion.div className='Dashboard_container_2_2_mini'  animate={{y:1}} initial={{y:100}}>
            <div style={{'display':'flex','justifyContent':'start'}}>
          {/* <img src={illustration} style={{'width':'50%','height':'200px'}}/> */}
          <img src='https://media.istockphoto.com/id/1321012044/vector/white-gray-line-stripe-background-diagonal-neutral-texture-geometric-paper-web-banner.jpg?s=612x612&w=0&k=20&c=ALv8ZRcxOAZLZvIRt9dMexl5M7AuB8NfqtxpspzkNiQ=' style={{'width':'100%','height':'300px','borderRadius':'10px','margin':'20px 0px'}}/>
            <div className='DashboardOnBanner'>
              <h2>Widecity makes it<br/>Simple</h2>
              {/* <img src='https://workplaceinsight.net/wp-content/uploads/2019/02/Boss-Deploy-Brochure-10.jpg' className='dashboardOnbannerimage'/> */}
            </div>
          </div>
          <Text_Heading_2 text='Dashboard'/>
          <Text_paragraph_lite text='Dashboards provide real-time or near-real-time updates on key performance indicators (KPIs) and 
          metrics relevant to a specific area or business function. They enable users to monitor progress,
          identify areas of improvement, and track performance against targets.'/><br/>
          <Text_Heading_2 text='Products In Use'/>
          <Text_paragraph_lite text='This are the products that are installed in your widecity account. Make sure all the products are 
          installed with your knowledge.'/>
          <br/>
          <div className='Dashboard_Product_container'>
          {MyProducts.map((product)=>(
            <div style={{'margin':'10px'}}>
              <ButtonLink text={product.ProductName} icon='' description={product.DueDate}/>
              </div>
          ))}
          </div>
      {/* <Footer/> */}
      </motion.div>
        )
      }
