import React from 'react'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import Text_paragraph_lite from '../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import './Products.css'
import Text_Links from '../../Components/Text/Links/Text_Links'
import { Button_Submit } from '../../Components/Button/Submit/Button_Submit'
import ButtonLink from '../../Components/Button/Link/ButtonLink'
export default function Products() {
  const products = [{'name':'webspeak','description':'webspeak is super and wonderful.'},{'name':'Quickvote','description':'qucik vote is for making the voting system more effective.'}];
  return (
    <>

     {products.map((product) => (
       <div className='Product_Main_Container '>
        <div className='Product_mini_container'>
            <img src='https://static.vecteezy.com/system/resources/previews/000/422/677/original/vector-report-icon.jpg' alt='image' className='Product_image'/>
            <div>
                <Text_Heading_2 text={product.name}/>
                <Text_Links text='widecity'/>
            </div>
        </div>
        <div className='Product_Paragraph'>
            <Text_paragraph_lite text={product.description}/>
        </div>
        <div className='Product_Get_Button'>
          <ButtonLink text='Get It' link='productdetails'/>
        </div>
      </div>
     ))}

    </>
  )
}
