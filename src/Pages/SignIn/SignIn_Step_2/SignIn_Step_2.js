import React, { useContext, useEffect, useState } from 'react'
import './Signin_Step_2.css'
import Text_Heading_2 from '../../../Components/Text/Heading_2/Text_Heading_2'
import Text_Links from '../../../Components/Text/Links/Text_Links'
import { Button_Submit } from '../../../Components/Button/Submit/Button_Submit'
import Input_Password from '../../../Components/Input/Password/Input_Password'
import axios from 'axios'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import Text_Error from '../../../Components/Text/Error/Text_Error'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import { core_url } from '../../../Constants/Variables'
import Signin_p_skeleton from '../../../Components/Skeletons/signin_p/Signin_p_skeleton'
import Logo from '../../../assets/logo_white_72.png'
import Text_paragraph_lite from '../../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import GetCookieValue from '../../../Components/HandleCookie/GetCookie/GetCookieValue'
export function Signin_Step_2() {
  // function to send api request
  const [data, setdata] = useState('');
  const [Password, setpassword] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isfailed, setisfailed] = useState(false);
  const [userEmail, setuserEmail] = useState('');

  useEffect(()=>{
    setuserEmail(GetCookieValue('userEmail'))
  },[])
  const navigate = useNavigate()
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


  const sendData = () => {
  const userEmail = getCookieValue('userEmail')
  const requestData = { "Email":userEmail, "Password":Password};
  let url = core_url+'/signin_p'
  axios.post(url, requestData)
  .then(response => {
    if(response.data['status'] == 'failed' || response.data['status']=='success'){
      if(response.data['status']=='success'){
      document.cookie = `widecitykey=widecitymakesitsimple`
      navigate('/home');}
      else{
      setisfailed(true)
      setisLoading(false)}}})

  .catch(error => {
  console.error('Error:', error);
  });
  };
  const handleState = (state)=>{setpassword(state)}

// end of function


  const validatedata = () => {
    sendData();
    setisLoading(true);
  }
  if(isLoading){
    return(
          <Signin_p_skeleton/>
    )
  }
else{

  return (
    <motion.div className='SignIn_2_main_container' animate={{scale:1}} initial={{scale:0}}>
      <div className='SignIn_2_container'>
        <div className='SignIn_2_mini_container'>
        <div style={{'display':'flex','justifyContent':'center'}}>
                <div style={{'display':'inline','text-align':'center'}}>
                <img src={Logo}/>
                {/* <Text_Heading_2 text='Sign in to Widecity' /> */}
           <div style={{'display':'flex','justifyContent':'start'}}><Text_Heading_2 text='Password' /></div>

                </div>
              </div>
           <Text_paragraph_lite text='Widecity is here to make everything simple for you.'/>
           <br></br>
           <div style={{'display':'flex','justifyContent':'center'}}>
           <div style={{'border':'.5px solid grey','borderRadius':'100px','padding':'5px 10px'}}>
              ID {userEmail}
            </div>
           </div>

           {isfailed?<Text_Error text='Invalid Password'/>:<></>}

        <Input_Password label='Please Enter Your Secret Key' placeholder='Password' Getdata={handleState}/>
        <div className='Signin_2_link_container'>
          {/* <Text_Links text='Forget Password'/>&nbsp; */}
          <Text_Links  text='Create' link='/siginup_'/>
          </div>
          <div className='SignIn_2_Next_button' onClick={validatedata}>
            <Button_Submit text='Sign In' />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
}


