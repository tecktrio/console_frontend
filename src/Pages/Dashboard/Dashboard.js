import React from 'react'
import './Dashboard.css'
import { Button_Submit } from '../../Components/Button/Submit/Button_Submit'
import { primary, primary_text } from '../../Constants/Colors'
import NButton from '../../Components/Button/NButton/NButton'
import Text_Paragraph from '../../Components/Text/Paragraph/Text_Paragraph'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import { Input_Text } from '../../Components/Input/Text/Input_Text'
import Text_Links from '../../Components/Text/Links/Text_Links'
import Text_paragraph_lite from '../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import Input_Password from '../../Components/Input/Password/Input_Password'
import Input_Password_NoEdit from '../../Components/Input/Password_NoEdit/Input_Password_NoEdit'
export default function Dashboard() {
    const ApiKeys = [{'product':'webspeak','key':'jaflkdhfoewajkfuawerjlkawejirj'},{'product':'scroller','key':'dfjaljeioawjeklrjawjdfas'}]
  return (

            <div className='Dashboard_container_2_2_mini'>
                <Text_Heading_2 text='Dashboard'/>
                <Text_paragraph_lite text='Dashboards provide real-time or near-real-time updates on key performance indicators (KPIs) and 
                metrics relevant to a specific area or business function. They enable users to monitor progress,
                identify areas of improvement, and track performance against targets.'/><br/>
                <Text_Heading_2 text='Api Keys'/>
                <Text_paragraph_lite text='APIs allow different software systems to communicate and interact with each other, and API
                keys play a crucial role in controlling and securing access to these APIs.'/><br/>

                {ApiKeys.map((api)=>(
                <div className='Dashboard_Api_container'>
                    <Text_Heading_2 text={api.product}/>
                    <Input_Password_NoEdit text={api.key}/>
                </div>
                ))}
               
</div>
  )
}
