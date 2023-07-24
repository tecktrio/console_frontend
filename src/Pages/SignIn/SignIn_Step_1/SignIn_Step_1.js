import React, { useContext, useEffect, useState } from 'react'
import './Signin_Step_1.css'
import { Input_Text } from '../../../Components/Input/Text/Input_Text'
import Text_Heading_2 from '../../../Components/Text/Heading_2/Text_Heading_2'
import Text_Paragraph from '../../../Components/Text/Paragraph/Text_Paragraph'
import Text_Links from '../../../Components/Text/Links/Text_Links'
import Text_paragraph_lite from '../../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import { Button_Submit } from '../../../Components/Button/Submit/Button_Submit'
import axios from 'axios'
import Text_Error from '../../../Components/Text/Error/Text_Error'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import { core_url } from '../../../Constants/Variables'
import { useNavigate } from 'react-router-dom'
export function Signin_Step_1() {

  // function to send api request
    const [data, setdata] = useState('');
    const [Email, setemail] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [isfailed, setisfailed] = useState(false);
    const navigate = useNavigate()


    useEffect(()=>{
      if(data['status'] == 'failed' || data['status']=='success'){
        if(data['status']=='success'){
          document.cookie = `userEmail=${Email}`;
          navigate('/signin_p');}
        else{
          setisfailed(true)
          setisLoading(false)
        }}
    },[data])

    const sendData = () => {
      const requestData = { "Email": Email};
      let url = core_url+'/signin_u'
      axios.post(url, requestData)
      .then(response => {
      setdata(response.data);
      })
      .catch(error => {
      console.error('Error:', error);
      });
    };
    const handleState = (state)=>{setemail(state)}
  // end of function


  const validateUserEmail = () => {
    sendData();
    setisLoading(true);
  }


  if(isLoading){
    return (
    <LoadingScreen/>
  )
    }
    else{
      return (
        <div className='SignIn_main_container'>
          <div className='SignIn_container'>
            <div className='SignIn_mini_container'>
              <div style={{'display':'flex','justifyContent':'center'}}><Text_Heading_2 text='Sign in to Widecity' /></div>
            <Text_paragraph_lite text='Widecity is here to make everything simple for you.'/><Text_Links text='Learn More'/><br/><br/>
            {isfailed?<Text_Error text='Invalid Email'/>:<></>}
            
            <Input_Text label='use your widecity account' placeholder='Email id or phone number' Getdata={handleState}/>
            <div className='Signin_link_container'>
              <Text_Links text='Forget email'/>&nbsp;
              <Text_Links  text='| Create account' link='/signup_'/>
              </div>
              <div className='SignIn_Next_button' onClick={validateUserEmail}>
                <Button_Submit text='Next'/>
              </div>
            </div>
          </div>
        </div>
    )
    }
}


