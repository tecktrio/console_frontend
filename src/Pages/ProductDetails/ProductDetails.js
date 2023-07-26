import React from 'react'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import Text_paragraph_lite from '../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import Text_NoEdit from '../../Components/Input/Text_NoEdit/Text_NoEdit'
import './ProductDetails.css'

export default function ProductDetails() {
  // return jsx
  return (
    <div>
        <div className='ProductDetail_Heading_Container'>
            <img src='https://static.vecteezy.com/system/resources/previews/000/422/677/original/vector-report-icon.jpg' alt='image' className='ProductDetails_image'/>&nbsp;
            <Text_Heading_2 text='WebSpeak'/>
        </div>
       
    </div>
  )
}
