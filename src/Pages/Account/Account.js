import React, { useEffect, useState } from 'react'
import './Account.css'
import Text_Paragraph from '../../Components/Text/Paragraph/Text_Paragraph'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import Profile_Picture from '../../assets/Images/user.png'
import { Input_Text } from '../../Components/Input/Text/Input_Text'
import Text_paragraph_lite from '../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import { motion } from 'framer-motion'
import axios from 'axios'
import { core_url } from '../../Constants/Variables'
import GetCookieValue from '../../Components/HandleCookie/GetCookie/GetCookieValue'

export default function Account() {
  const [firstname,setfirstname]=useState("Loading")
  const [lastname,setlastname]=useState("Loading")
  const [email,setemail]=useState("Loading")
  const [contact,setcontact]=useState("Loading")

  useEffect(()=>{
    const url = core_url+'/console/handleuser/'+GetCookieValue('userEmail')
    axios.get(url).then((response)=>{
      setfirstname(response.data['data']['FirstName'])
      setlastname(response.data['data']['LastName'])
      setemail(response.data['data']['Email'])
      setcontact(response.data['data']['Contact'])
    }).catch((error)=>{
      console.log(error)
    })}
    ,[])
  

  return (
    <motion.div className='Main_Container'  animate={{y:1}} initial={{y:100}}>
      <div>
      <Text_Heading_2 text="Profile"/>
      <Text_paragraph_lite text='Personal info and options to manage it. You can make some of this info,
      like your contact details, visible to others so they can reach you easily. 
      You can also see a summary of your profiles.'/>
      </div>
      <div className='container'>
        <img src={Profile_Picture} style={{'height':'200px'}}/>
      <div>
          <div className='mini_container'>
            <div>
            <Text_Paragraph text='Name'/>
            <Text_paragraph_lite text='This is your public Name, Visible all over widecity products'/>
            </div>
            &nbsp;&nbsp;&nbsp;
            <Input_Text placeholder={firstname}/>
          </div>
          <div className='mini_container'>
            <div>
            <Text_Paragraph text='Email'/>
            <Text_paragraph_lite text='Email is user account unique id'/>
            </div>
            &nbsp;&nbsp;&nbsp;
            <Input_Text placeholder={email}/>
          </div>
          <div className='mini_container'>
            <div>
            <Text_Paragraph text='Contact'/>
            <Text_paragraph_lite text='Personal Contact Number'/>
            </div>
            &nbsp;&nbsp;&nbsp;
            <Input_Text placeholder={contact}/>
          </div>
         
        </div>
      </div>
    </motion.div>
  )
}
