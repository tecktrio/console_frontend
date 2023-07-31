import React, { useEffect, useState } from 'react'
import './Home.css'
import Text_Links from '../../Components/Text/Links/Text_Links'
import ProductDetails from '../ProductDetails/ProductDetails'
import Products from '../Products/Products'
import ButtonLink from '../../Components/Button/Link/ButtonLink'
import Dashboard from '../Dashboard/Dashboard'
import {useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Dashboard_Icon from '../../assets/Images/dashboard.png'
import Product_Icon from '../../assets/Images/product.png'
import Billing_Icon from '../../assets/Images/bill.png'
import Account_Icon from '../../assets/Images/user.png'
import Billing from '../Billing/Billing'
import Account from '../Account/Account'
import DocumentationHome from '../Documentation/DocumentationHome/DocumentationHome'
import GetCookieValue from '../../Components/HandleCookie/GetCookie/GetCookieValue'
import { motion } from "framer-motion"
import IconLink from '../../Components/Button/Link/IconLink'
import Logo from '../../assets/logo_white_72.png'
import Text_Heading_1 from '../../Components/Text/Heading_1/Text_Heading_1'
import Text_paragraph_lite from '../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import Footer from '../../Components/Footer/Footer'

export default function Home(props) {
      // Variables and State
      const [userEmail,setuserEmail] = useState('')
      const [sidebar,setsidebar] = useState(false)
      const Route = props.name

      const navigate = useNavigate();
      const signout = ()=>
      {
        Cookies.remove('widecitykey');
        navigate('/signin_u')
      }
      // useEffect Hook
      useEffect(()=>
      {
        const key = GetCookieValue('widecitykey')
        if(key != 'widecitymakesitsimple')
        {
          console.log('redirecting');
          navigate('/signin_u')
        }
        if(!GetCookieValue('userEmail'))
        {
          navigate('/signin_u')
        }
        else
        {
          setuserEmail(GetCookieValue('userEmail'))
        }
      },[])

      // Return jsx
      return (
        <motion.div className='Dashboard_main_container'>
          <div className='Dashboard_container_1'>
            <div className='Dashboard_Menu_Heading_container'>
                <img src={Logo} width={'40px'} onClick={()=>setsidebar(!sidebar)}/>
                <div className='Dashboard_Menu_Heading_container_mini'>
                <Text_Heading_1 text='Widecity'/>&nbsp;
                <Text_paragraph_lite text='Console'/>
                </div>
            </div>
            <div className='Dashboard_User_Profil' >
                <div>
                    <div>{userEmail}</div>
                    {/* <div style={{'display':'flex','justifyContent':'end','cursor':'pointer'}} onClick={()=>signout()}>Signout</div> */}
                </div>
                <div style={{'margin':'5px'}}>
                    <img src='https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png' alt='image' className='Dashboard_Dp'/>
                </div>
            </div>
          </div>
          <div className='Dashboard_container_2'>

            <div className='Dashboard_container_2_1'>
              <div className='Dashboard_celo_menu_option'>{Route =='home'?                      <ButtonLink text='Home'           link='' icon={Dashboard_Icon} description=""/>           :<Text_Links text='Home'           link='/home'                     icon={Dashboard_Icon}/>}</div>
              <div className='Dashboard_celo_menu_option'>{Route =='products'?                  <ButtonLink text='Products'       link='' icon={Product_Icon} description=""/>             :<Text_Links text='Products'       link='/products'                 icon={Product_Icon}/>}</div>
              <div className='Dashboard_celo_menu_option'>{Route =='billing'?                   <ButtonLink text='Billing'        link='' icon={Billing_Icon} description=""/>             :<Text_Links text='Billing'        link='/billing'                  icon={Billing_Icon}/>}</div>
              <div className='Dashboard_celo_menu_option'>{Route =='account'?                   <ButtonLink text='Account'        link='' icon={Account_Icon} description=""/>             :<Text_Links text='Account'        link='/account'                  icon={Account_Icon}/>}</div>
            </div>

            {sidebar?
            <motion.div className='Dashboard_container_2_1_celo' animate={{x:1}} initial={{x:-100}} transition={{ delay: -0.1, duration: .5 }}>
              <div className='Dashboard_celo_menu_option'>{Route =='home'?                      <ButtonLink text='Home'   link='' icon={Dashboard_Icon} description=""/>           :<Text_Links  text='Home'    link='/home'                     icon={Dashboard_Icon}/>}</div>
              <div className='Dashboard_celo_menu_option'>{Route =='products'?                  <ButtonLink text='Products'   link='' icon={Product_Icon} description=""/>             :<Text_Links   text='Products'   link='/products'                 icon={Product_Icon}/>}</div>
              <div className='Dashboard_celo_menu_option'>{Route =='billing'?                   <ButtonLink text='Billing'   link='' icon={Billing_Icon} description=""/>             :<Text_Links   text='Billing'   link='/billing'                  icon={Billing_Icon}/>}</div>
              <div className='Dashboard_celo_menu_option'>{Route =='account'?                   <ButtonLink text='Account'   link='' icon={Account_Icon} description=""/>             :<Text_Links   text='Account'   link='/account'                  icon={Account_Icon}/>}</div>
            </motion.div>: <motion.div className='Dashboard_container_2_1_celo' animate={{x:-500}} initial={{x:1}} transition={{ delay: 0, duration: 1 }}>
            <div className='Dashboard_celo_menu_option'>{Route =='home'?                      <ButtonLink text='Home'   link='' icon={Dashboard_Icon} description=""/>           :<Text_Links  text='Home'    link='/home'                     icon={Dashboard_Icon}/>}</div>
            <div className='Dashboard_celo_menu_option'>{Route =='products'?                  <ButtonLink text='Products'   link='' icon={Product_Icon} description=""/>             :<Text_Links   text='Products'   link='/products'                 icon={Product_Icon}/>}</div>
            <div className='Dashboard_celo_menu_option'>{Route =='billing'?                   <ButtonLink text='Billing'   link='' icon={Billing_Icon} description=""/>             :<Text_Links   text='Billing'   link='/billing'                  icon={Billing_Icon}/>}</div>
            <div className='Dashboard_celo_menu_option'>{Route =='account'?                   <ButtonLink text='Account'   link='' icon={Account_Icon} description=""/>             :<Text_Links   text='Account'   link='/account'                  icon={Account_Icon}/>}</div>
            </motion.div>}

            <div className='Dashboard_container_2_2'>
              {Route=='productdetails'          && <ProductDetails/>}
              {Route=='products'                && <Products/> }
              {Route=='home'                    && <Dashboard/> }
              {Route=='academy'                 && <DocumentationHome   name="academy"/> }
              {Route=='billing'                 && <Billing/> }
              {Route=='account'                 && <Account/> }
            </div>

          </div>
          {/* <Footer/> */}

        </motion.div>
      )
    }
