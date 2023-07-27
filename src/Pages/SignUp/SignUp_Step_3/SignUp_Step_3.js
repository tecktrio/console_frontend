import React, { useEffect, useState } from 'react'
import './SignUp_Step_3.css'
import { Input_Text } from '../../../Components/Input/Text/Input_Text'
import Text_Heading_2 from '../../../Components/Text/Heading_2/Text_Heading_2'
import Text_Paragraph from '../../../Components/Text/Paragraph/Text_Paragraph'
import Text_Links from '../../../Components/Text/Links/Text_Links'
import Text_paragraph_lite from '../../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import { Button_Submit } from '../../../Components/Button/Submit/Button_Submit'
import Input_Password from '../../../Components/Input/Password/Input_Password'
import ButtonLink from '../../../Components/Button/Link/ButtonLink'
import axios from 'axios'
import Text_Error from '../../../Components/Text/Error/Text_Error'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import { core_url } from '../../../Constants/Variables'
import { useNavigate } from 'react-router-dom'
export function SignUp_Step_3() {
        // function to send api request
        const [data, setdata] = useState('');
        const [password, setpassword] = useState('');
        const [password_re, setpassword_re] = useState('');
        const [isLoading, setisLoading] = useState(false);
        const [error, seterror] = useState('');
        const [isfailed, setisfailed] = useState(false);
        const navigate = useNavigate()

        // validating user login
        useEffect(()=>{
          if(data['status'] == 'failed' || data['status']=='success'){
            if(data['status']=='success'){
              const otp = GetOtp()
              console.log('sending in cookie',otp)
              document.cookie = `Otp=${otp}`
              document.cookie = `Password=${password}`
              navigate('/signup____')}
            else{
              setisfailed(true)
              setisLoading(false)
              seterror(data['error'])
            }}
        },[data])
        // end

        const GetOtp=()=>{
          const otp = ''
          let url = core_url+'/otp_verification'
          axios.get(url)
          .then(response => {
           otp = response.data['otp'];
           console.log('Got the otp.')
           
          })
          return otp;
          
        }

        const sendData = () => {
          const requestData = { "password":password,"password_re":password_re};
          let url = core_url+'/signup___'
          axios.post(url, requestData)
          .then(response => {
          setdata(response.data);
          })
          .catch(error => {
          console.error('Error:', error);
          });
        };
        const handleStatepassword = (state)=>{setpassword(state)}
        const handleStatepassword_re = (state)=>{setpassword_re(state)}
      // end of function
      
      
        const validatedata = () => {
          sendData();
          setisLoading(true);
        }

  if (isLoading){
    return(
    <LoadingScreen/>
    )
  }
  else{

  return (
    <div className='SignUp_3_main_container'>
      <div className='SignUp_3_container'>
        <div className='SignUp_3_mini_container'>
           <div style={{'display':'flex','justifyContent':'center'}}><Text_Heading_2 text='Set Password' /></div>
        <Text_paragraph_lite text='Widecity is here to make everything simple for you.'/><Text_Links value='Learn More'/><br/><br/>
        {isfailed?<Text_Error text={error}/>:<></>}
        <Input_Password label='New Password' placeholder='strong password' Getdata={handleStatepassword}/>
          <Input_Password label='ReEnter Password' placeholder='strong password' Getdata={handleStatepassword_re}/>
          <div className='SignUp_3_Next_button' onClick={validatedata}>
            <Button_Submit text='Next' />
          </div>
        </div>
      </div>
    </div>
  )
  }
}


