import React, { useEffect, useState } from 'react'
import './SignUp_Step_4.css'
import Text_Heading_2 from '../../../Components/Text/Heading_2/Text_Heading_2'
import Text_Links from '../../../Components/Text/Links/Text_Links'
import Text_paragraph_lite from '../../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import { Button_Submit } from '../../../Components/Button/Submit/Button_Submit'
import Input_Password from '../../../Components/Input/Password/Input_Password'
import axios from 'axios'
import Text_Error from '../../../Components/Text/Error/Text_Error'
import { InputOtp } from '../../../Components/Input/Otp/InputOtp'
import { core_url } from '../../../Constants/Variables'
export function SignUp_Step_4() {
        // function to send api request
        const [data, setdata] = useState('');
        const [otp, setotp] = useState('');
        const [isLoading, setisLoading] = useState(false);
        const [error, seterror] = useState('');
        const [isfailed, setisfailed] = useState(false);
  
        // validating user login
        useEffect(()=>{
          if(data['status'] == 'failed' || data['status']=='success'){
            if(data['status']=='success'){
              window.location.href = '/home'}
            else{
              setisfailed(true)
              setisLoading(false)
              seterror(data['error'])
            }}
        },[data])
        // end

        const sendData = () => {
          const requestData = { "otp":otp};
          let url = core_url+'/signup____'
          axios.post(url, requestData)
          .then(response => {
          setdata(response.data);
          })
          .catch(error => {
          console.error('Error:', error);
          });
        };
        const handlestateotp = (state)=>{setotp(state);console.log(state)}
        // const handleStatepassword_re = (state)=>{setpassword_re(state)}
      // end of function
      
      
        const validatedata = () => {
          sendData();
          setisLoading(true);
        }
  return (
    <div className='SignUp_4_main_container'>
      <div className='SignUp_4_container'>
        <div className='SignUp_4_mini_container'>
           <div style={{'display':'flex','justifyContent':'center'}}><Text_Heading_2 text='Verify otp' /></div>
        <Text_paragraph_lite text='Widecity is here to make everything simple for you.'/><Text_Links value='Learn More'/><br/><br/>
        <Text_paragraph_lite text='Check your Email. We have send an otp.'/>
        {isfailed?<Text_Error text={error}/>:<></>}
        {/* <Input_Password label='Enter Otp' placeholder='strong password' Getdata={handleStatepassword}/> */}
          {/* <Input_Password label='ReEnter Password' placeholder='strong password' Getdata={handleStatepassword_re}/> */}
          <InputOtp Getdata={handlestateotp}/>
          <div className='SignUp_4_Next_button' onClick={validatedata}>
            <Button_Submit text='Next' />
          </div>
        </div>
      </div>
    </div>
  )
}


