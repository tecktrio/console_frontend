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
export function Signin_Step_2() {
  // function to send api request
  const [data, setdata] = useState('');
  const [Password, setpassword] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [isfailed, setisfailed] = useState(false);

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


  useEffect(()=>{

    if(data['status'] == 'failed' || data['status']=='success'){
      console.log('inuseeffent',data['status'])
      if(data['status']=='success'){
      document.cookie = `widecitykey=widecitymakesitsimple`
      navigate('/home');}
      else{
      console.log('invalid password')
      setisfailed(true)
      setisLoading(false)
      // console.log(isfailed)
    }
    }
  
    // console.log(Password) 
  },[data])

  // useEffect(()=>{console.log(userEmail)},[])
  const sendData = () => {
  const userEmail = getCookieValue('userEmail')
  const requestData = { "Email":userEmail, "Password":Password};
  axios.post('http://127.0.0.1:8000/signin_p', requestData)
  .then(response => {
  setdata(response.data);
  console.log('response',response.data['status'])
})
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
          <LoadingScreen/>
    )
  }
else{

  return (
    <div className='SignIn_2_main_container'>
      <div className='SignIn_2_container'>
        <div className='SignIn_2_mini_container'>
           <div style={{'display':'flex','justifyContent':'center'}}><Text_Heading_2 text='Password' /></div>
           {isfailed?<Text_Error text='Invalid Password'/>:<></>}

        <Input_Password label='' placeholder='Password' Getdata={handleState}/>
        <div className='Signin_2_link_container'>
          <Text_Links text='Forget Password'/>&nbsp;
          <Text_Links  text='| Create account'/>
          </div>
          <div className='SignIn_2_Next_button' onClick={validatedata}>
            <Button_Submit text='Next' />
          </div>
        </div>
      </div>
    </div>
  )
}
}


