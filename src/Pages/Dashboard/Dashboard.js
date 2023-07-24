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
import illustration from '../../assets/Images/4045264.jpg'
import ButtonLink from '../../Components/Button/Link/ButtonLink'
export default function Dashboard() {
    const ApiKeys = [{'product':'webspeak','key':'jaflkdhfoewajkfuawerjlkawejirj'},{'product':'scroller','key':'dfjaljeioawjeklrjawjdfas'}]
  return (

            <div className='Dashboard_container_2_2_mini'>
                 <div style={{'display':'flex','justifyContent':'start'}}>
                <img src={illustration} style={{'width':'20%','margin':'0px'}}/>
                </div>
                <Text_Heading_2 text='Dashboard'/>
                <Text_paragraph_lite text='Dashboards provide real-time or near-real-time updates on key performance indicators (KPIs) and 
                metrics relevant to a specific area or business function. They enable users to monitor progress,
                identify areas of improvement, and track performance against targets.'/><br/>
                <Text_Heading_2 text='Products In Use'/>
                <Text_paragraph_lite text='This are the products that are installed in your widecity account. Make sure all the products are 
installed with your knowledge.'/><br/>

                <div className='Dashboard_Product_container'>
                {ApiKeys.map((api)=>(
                  <div style={{'margin':'10px'}}>
                    <ButtonLink text={api.product}/>
                    </div>
                ))}
                </div>

             
               
</div>
  )
}
