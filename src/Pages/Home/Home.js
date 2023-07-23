import React, { useEffect } from 'react'
import './Home.css'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import { Input_Text } from '../../Components/Input/Text/Input_Text'
import Text_Links from '../../Components/Text/Links/Text_Links'
import ProductDetails from '../ProductDetails/ProductDetails'
import Products from '../Products/Products'
import ButtonLink from '../../Components/Button/Link/ButtonLink'
import Dashboard from '../Dashboard/Dashboard'
import { Link } from 'react-router-dom'

export default function Home(props) {
  console.log(props.name)
  const Route = props.name
        // validating user login
        function getCookieValue(cookieName) {
          const cookies = document.cookie.split(';');
          
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            
            // Check if the cookie starts with the provided name
            if (cookie.startsWith(cookieName + '=')) {
              // Extract and return the cookie value
              return cookie.substring(cookieName.length + 1);
            }
          }
          
          // Cookie not found
          return null;
        }
        useEffect(()=>{
          const key = getCookieValue('widecitykey')
          if(key != 'widecitymakesitsimple'){
          console.log('redirecting');
          <Link to='signin_u'/>
          }
        
          },[])
          // end

        

  return (
    <div className='Dashboard_main_container'>
      <div className='Dashboard_container_1'>
        <div className='Dashboard_Menu_Heading_container'>
            <img src='https://th.bing.com/th/id/R.c1c22c418c91a0c080d6d08c8f44d271?rik=uG45aHcZgGt2YA&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2014%2f08%2fmobile-menu-button-icon_290302.png&ehk=ll0Ek6SIQK9AyBsIHcGaQyhXX9YnxMMIjRJD9aPhSfY%3d&risl=&pid=ImgRaw&r=0' width={'40px'}/>
            <Text_Heading_2 text='Widecity Console'/>
        </div>
        <div className='Dashboard_SearchBar'>
            <Input_Text placeholder='Search'/>
        </div>
        <div className='Dashboard_User_Profile'>
            <div>
                <div>amalbennypullan4@gmail.com</div>
                <div style={{'display':'flex','justifyContent':'end'}}><Text_Links text='Update Profile'/></div>
            </div>
            <div style={{'margin':'5px'}}>
                <img src='https://pluspng.com/img-png/png-user-icon-icons-logos-emojis-users-2400.png' alt='image' className='Dashboard_Dp'/>
            </div>
        </div>
      </div>
      <div className='Dashboard_container_2'>

        <div className='Dashboard_container_2_1'>
          {Route =='home'? <ButtonLink text='Home' link=''/> :<Text_Links text='Home' link='/home'/>}
          {Route =='products'? <ButtonLink text='Products' link=''/> :<Text_Links text='Products' link='/home/products'/>}
        </div>

        <div className='Dashboard_container_2_2'>
          {Route=='productdetails' && <ProductDetails/>}
          {Route=='products' && <Products/> }
          {Route=='home' && <Dashboard/> }
        </div>

      </div>
    </div>
  )
}
