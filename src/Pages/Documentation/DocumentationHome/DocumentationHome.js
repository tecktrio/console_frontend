import React, { useState } from 'react'
import ButtonLink from '../../../Components/Button/Link/ButtonLink'
import DocumentationQuickvote from '../DocumentationProduct/QuickVote/DocumentationQuickvote'
import DocumentationAcademy from '../DocumentationProduct/Academy/DocumentationAcademy'
import Text_Paragraph from '../../../Components/Text/Paragraph/Text_Paragraph'
import './DocumentationHome.css'
import Text_Links from '../../../Components/Text/Links/Text_Links'
export default function DocumentationHome(props) {
  const tab = props.name
  console.log(tab)
  return (
    <div className='Container1'>
          <div className='Container2'>
            {tab =='quickvote'? <ButtonLink text='QuickVote' icon=''/> : <Text_Links text='QuickVote' icon='' link="/documentation/quickvote" />}
            {tab =='academy'? <ButtonLink text='Academy' icon=''/> :  <Text_Links text='Academy' icon='' link="/documentation/academy" />}
          </div>
          <div className='verticalLine'></div>
          <div className='Dashboard_container_2_2'>
            {tab=='quickvote' && <DocumentationQuickvote/>}
            {tab=='academy' && <DocumentationAcademy/> }
            {/* kjlkjl */}
          </div>
    </div>
  )
}
