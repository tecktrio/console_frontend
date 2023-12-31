import React, { useEffect, useState } from 'react'
import './SignUp_Step_1.css'
import { Input_Text } from '../../../Components/Input/Text/Input_Text'
import Text_Heading_2 from '../../../Components/Text/Heading_2/Text_Heading_2'
import Text_Links from '../../../Components/Text/Links/Text_Links'
import Text_paragraph_lite from '../../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import { Button_Submit } from '../../../Components/Button/Submit/Button_Submit'
import { InputNumber } from '../../../Components/Input/Number/InputNumber'
import axios from 'axios'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import Text_Error from '../../../Components/Text/Error/Text_Error'
import { core_url } from '../../../Constants/Variables'
import { useNavigate } from 'react-router-dom'
import Logo from '../../../assets/logo_white_72.png'
import Signin_u_skeleton from '../../../Components/Skeletons/signin_u/Signin_u_skeleton'

export function SignUp_Step_1() {
    // function to send api request
    const [data, setdata] = useState('');
    const [username, setusername] = useState('');
    const [phone, setphone] = useState('');
    const [countrycode, setcountycode] = useState('+91');
    const [isLoading, setisLoading] = useState(false);
    const [isfailed, setisfailed] = useState('');
    const navigate = useNavigate()

    // validating user login
    useEffect(()=>{
      if(data['status'] == 'failed' || data['status']=='success'){
        if(data['status']=='success'){
          document.cookie = `UserEmail=${username}`
          document.cookie = `UserContact=${phone}`
          document.cookie = `CountryCode=${countrycode}`
          navigate('/signup__');}
        else{
          setisfailed(true)
          setisLoading(false)
        }}
    },[data])
  // end
    

    const sendData = () => {
      const requestData = { "Email":username,"Contact":phone};
      let url = core_url+'/signup_'
      axios.post(url, requestData)
      .then(response => {
      setdata(response.data);
      })
      .catch(error => {
      console.error('Error:', error);
      });
    };

    const handleStateUsername = (state)=>{setusername(state)}
    const handleStatePhone = (state)=>{setphone(state)}
  // end of function
  
  
    const validatedata = () => {
      sendData();
      setisLoading(true);
    }

  if(isLoading){
  return (
    <Signin_u_skeleton/>
  )
  }
  else{
    return (
      <div className='SignUp_main_container'>
        <div className='SignUp_container'>
          <div className='SignUp_mini_container'>
          <div style={{'display':'flex','justifyContent':'center'}}>
                <div style={{'display':'inline','text-align':'center'}}>
                <img src={Logo}/>
             <div style={{'display':'flex','justifyContent':'center'}}><Text_Heading_2 text='Sign Up to Widecity' /></div>
          </div>
          </div>
          <Text_paragraph_lite text='Widecity is here to make everything simple for you.'/><Text_Links value='Learn More'/>
          {isfailed?<Text_Error text='Invalid Email or Contact'/>:<></>}
          <Input_Text label='Your New ID' placeholder='Email id ' Getdata={handleStateUsername}/>
          <InputNumber label='Your Phone Number' placeholder='+00 0000000000'  Getdata={handleStatePhone}/>
          <div className='SignUp_link_container'>
            {/* <Text_Links value='Forget email'/>&nbsp; */}
            <Text_paragraph_lite text='Already have account?'/>
            <Text_Links  text='SignIn' link='/signin_u'/>
            </div>
            <div className='SignUp_Next_button' onClick={validatedata}>
              <Button_Submit text='Next'/>
            </div>
          </div>
        </div>
      </div>
    )
  }

}


