import React, { useEffect, useState } from 'react'
import './Home.css'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import Text_Links from '../../Components/Text/Links/Text_Links'
import ProductDetails from '../ProductDetails/ProductDetails'
import Products from '../Products/Products'
import ButtonLink from '../../Components/Button/Link/ButtonLink'
import Dashboard from '../Dashboard/Dashboard'
import {useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Dashboard_Icon from '../../assets/Images/dashboard.png'
import Product_Icon from '../../assets/Images/product.png'
import Documentation_Icon from '../../assets/Images/document.png'
import Billing_Icon from '../../assets/Images/bill.png'
import Account_Icon from '../../assets/Images/user.png'
import Billing from '../Billing/Billing'
import Account from '../Account/Account'
import DocumentationHome from '../Documentation/DocumentationHome/DocumentationHome'
import GetCookieValue from '../../Components/HandleCookie/GetCookie/GetCookieValue'
import { motion } from "framer-motion"
import IconLink from '../../Components/Button/Link/IconLink'

export default function Home(props) {
      // Variables and State
      const [userEmail,setuserEmail] = useState('')
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
                <img src='https://th.bing.com/th/id/R.c1c22c418c91a0c080d6d08c8f44d271?rik=uG45aHcZgGt2YA&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2014%2f08%2fmobile-menu-button-icon_290302.png&ehk=ll0Ek6SIQK9AyBsIHcGaQyhXX9YnxMMIjRJD9aPhSfY%3d&risl=&pid=ImgRaw&r=0' width={'40px'}/>
                <Text_Heading_2 text='Widecity Console'/>
            </div>
            <div className='Dashboard_User_Profile'>
                <div>
                    <div>{userEmail}</div>
                    <div style={{'display':'flex','justifyContent':'end','cursor':'pointer'}} onClick={()=>signout()}>Signout</div>
                </div>
                <div style={{'margin':'5px'}}>
                    <img src='https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png' alt='image' className='Dashboard_Dp'/>
                </div>
            </div>
          </div>
          <div className='Dashboard_container_2'>
            <div className='Dashboard_container_2_1'>
              {Route =='home'?                      <ButtonLink text='Home'           link='' icon={Dashboard_Icon}/>           :<Text_Links text='Home'           link='/home'                     icon={Dashboard_Icon}/>}
              {Route =='products'?                  <ButtonLink text='Products'       link='' icon={Product_Icon}/>             :<Text_Links text='Products'       link='/products'                 icon={Product_Icon}/>}
              {Route.startsWith('documentation') ?  <ButtonLink text='Documentation'  link='' icon={Documentation_Icon}/>       :<Text_Links text='Documentation'  link='/documentation/quickvote'  icon={Documentation_Icon}/>}
              {Route =='billing'?                   <ButtonLink text='Billing'        link='' icon={Billing_Icon}/>             :<Text_Links text='Billing'        link='/billing'                  icon={Billing_Icon}/>}
              {Route =='account'?                   <ButtonLink text='Account'        link='' icon={Account_Icon}/>             :<Text_Links text='Account'        link='/account'                  icon={Account_Icon}/>}
            </div>
            <div className='Dashboard_container_2_1_celo'>
              {Route =='home'?                      <IconLink    link='' icon={Dashboard_Icon}/>           :<IconLink   link='/home'                     icon={Dashboard_Icon}/>}
              {Route =='products'?                  <IconLink    link='' icon={Product_Icon}/>             :<IconLink   link='/products'                 icon={Product_Icon}/>}
              {Route.startsWith('documentation') ?  <IconLink    link='' icon={Documentation_Icon}/>       :<IconLink   link='/documentation/quickvote'  icon={Documentation_Icon}/>}
              {Route =='billing'?                   <IconLink    link='' icon={Billing_Icon}/>             :<IconLink   link='/billing'                  icon={Billing_Icon}/>}
              {Route =='account'?                   <IconLink    link='' icon={Account_Icon}/>             :<IconLink   link='/account'                  icon={Account_Icon}/>}
            </div>
            <div className='Dashboard_container_2_2'>
              {Route=='productdetails'          && <ProductDetails/>}
              {Route=='products'                && <Products/> }
              {Route=='home'                    && <Dashboard/> }
              {Route=='documentation/academy'   && <DocumentationHome   name="academy"/> }
              {Route=='documentation/quickvote' && <DocumentationHome   name="quickvote"/> }
              {Route=='academy'                 && <DocumentationHome   name="academy"/> }
              {Route=='billing'                 && <Billing/> }
              {Route=='account'                 && <Account/> }
            </div>
          </div>
        </motion.div>
      )
    }
