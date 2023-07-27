import React, { useEffect, useState } from 'react'
import './SignUp_Step_2.css'
import { Input_Text } from '../../../Components/Input/Text/Input_Text'
import Text_Heading_2 from '../../../Components/Text/Heading_2/Text_Heading_2'
import Text_Paragraph from '../../../Components/Text/Paragraph/Text_Paragraph'
import Text_Links from '../../../Components/Text/Links/Text_Links'
import Text_paragraph_lite from '../../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import { Button_Submit } from '../../../Components/Button/Submit/Button_Submit'
import ButtonLink from '../../../Components/Button/Link/ButtonLink'
import axios from 'axios'
import LoadingScreen from '../../../Components/LoadingScreen/LoadingScreen'
import Text_Error from '../../../Components/Text/Error/Text_Error'
import { core_url } from '../../../Constants/Variables'
import { useNavigate } from 'react-router-dom'
export function SignUp_Step_2() {
      // function to send api request
      const [data, setdata] = useState('');
      const [firstname, setfirstname] = useState('');
      const [lastname, setlastname] = useState('');
      const [isLoading, setisLoading] = useState(false);
      const [isfailed, setisfailed] = useState(false);
      const navigate = useNavigate()

      // validating user login
      
      useEffect(()=>{
        if(data['status'] == 'failed' || data['status']=='success'){
          if(data['status']=='success'){
            document.cookie = `firstname=${firstname}`
            document.cookie = `lastname=${lastname}`
            navigate('/signup___')}
          else{
            setisfailed(true)
            setisLoading(false)
          }}
      },[data])
      // end
      const sendData = () => {
        const requestData = { "firstname":firstname,"lastname":lastname};
        let url = core_url+'/signup__'
        axios.post(url, requestData)
        .then(response => {
        setdata(response.data);
        })
        .catch(error => {
        console.error('Error:', error);
      });
      };
      const handleStatefirstname = (state)=>{setfirstname(state)}
      const handleStatelastname = (state)=>{setlastname(state)}
    // end of function
    
    
      const validatedata = () => {
        sendData();
        setisLoading(true)
      }

  if(isLoading){
  return (
    <LoadingScreen/>
  )
  }
  else{
    return(
    <div className='SignUp_main_container'>
      <div className='SignUp_container'>
        <div className='SignUp_mini_container'>
           <div style={{'display':'flex','justifyContent':'center'}}><Text_Heading_2 text="Let us know your" /></div>
        <Text_paragraph_lite text='Widecity is here to make everything simple for you.'/><Text_Links value='Learn More'/><br/><br/>
        {isfailed?<Text_Error text='First name and Last name cannot be empty'/>:<></>}
        <div className='SignUp_Name_Input_container'>
          <Input_Text label='First Name' placeholder='first name' Getdata={handleStatefirstname}/>
          <Input_Text label='Last Name' placeholder='last name'  Getdata={handleStatelastname}/>
        </div>
          <div className='SignUp_Next_button' onClick={validatedata}>
            <Button_Submit text='Next' />
          </div>
        </div>
      </div>
    </div>
    )
  }
}


