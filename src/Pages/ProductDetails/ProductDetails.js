import React from 'react'
import Text_Heading_2 from '../../Components/Text/Heading_2/Text_Heading_2'
import Text_paragraph_lite from '../../Components/Text/Paragraph_lite/Text_paragraph_lite'
import Text_NoEdit from '../../Components/Input/Text_NoEdit/Text_NoEdit'
import './ProductDetails.css'
export default function ProductDetails() {
  return (
    <div>
        <div className='ProductDetail_Heading_Container'>
            <img src='https://static.vecteezy.com/system/resources/previews/000/422/677/original/vector-report-icon.jpg' alt='image' className='ProductDetails_image'/>&nbsp;
            <Text_Heading_2 text='WebSpeak'/>
        </div>
        <div>
            <Text_paragraph_lite text='Webspeak helps to convert text to speeck on mouse hoverTTSReader converts text into speech, so you can conveniently listen to any custom text, website, PDF & ebook. Use our player to listen now or later, or generate mp3 audio files for voiceover & commercial use.'/>
            <br/>
            <br/>
            <Text_paragraph_lite text='This repo is a cdn that can speak a web content use the cdn link after the body tag.'/>
            <Text_NoEdit text='<script src ="https://cdn.jsdelivr.net/gh/widecity-developers/webspeak/widy_speak.js"></script>'/>
            <br/>
            <Text_paragraph_lite text='Just add the class to speak'/>
            <Text_NoEdit text='class="widy_speak"'/>
            <br/>
            <Text_paragraph_lite text='Add this class where ever you want the text to speak feature. p tag, div, etc... as given below example'/>
            <Text_NoEdit text='
            <!DOCTYPE html>
            <html lang="en">
            <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>widy_speak</title>
            </head>
            <body>
            <p class="widy_speak">welcome to widecity technologies</p>
            <p class="widy_speak">how are you. </p>
            <p class="widy_speak">contact at 946658045 for enquires</p>
            <p class="widy_speak">join our widecity community and explore the new technologies at your figuretips</p>
            <script src ="https://cdn.jsdelivr.net/gh/widecity-developers/webspeak/widy_speak.js"></script>
            </body>
            </html>'/>
            <br/>
            <Text_paragraph_lite text='This repo is a cdn that can speak a web content use the cdn link after the body tag.'/>
            <Text_NoEdit text='<script src ="https://cdn.jsdelivr.net/gh/widecity-developers/webspeak/widy_speak.js"></script>'/>
            
        </div>
    </div>
  )
}
