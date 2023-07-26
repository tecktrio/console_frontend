import React from 'react'
import './Account.css'
import Text_Paragraph from '../../Components/Text/Paragraph/Text_Paragraph'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import Profile_Picture from '../../assets/Images/user.png'
import { Input_Text } from '../../Components/Input/Text/Input_Text'
import Text_paragraph_lite from '../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import { motion } from 'framer-motion'

export default function Account() {
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
            <Input_Text placeholder='amal'/>
          </div>
          <div className='mini_container'>
            <div>
            <Text_Paragraph text='Email'/>
            <Text_paragraph_lite text='Email is user account unique id'/>
            </div>
            &nbsp;&nbsp;&nbsp;
            <Input_Text placeholder='amalpullan4@gmail.com'/>
          </div>
          <div className='mini_container'>
            <div>
            <Text_Paragraph text='Contact'/>
            <Text_paragraph_lite text='Personal Contact Number'/>
            </div>
            &nbsp;&nbsp;&nbsp;
            <Input_Text placeholder='+91 9946658045'/>
          </div>
         
        </div>
      </div>
    </motion.div>
  )
}
