import React, { useEffect } from 'react'
import { color_light_black } from '../../../Constants/Colors'
import './Text_NoEdit.css'
import { useRef } from 'react'
export default function Text_NoEdit(props) {
  const textareaRef = useRef(null)
  useEffect(
    function resizeTextarea() {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    },[]
  )
  return (
    <div className='Text_NoEdit_container'>
        <textarea type='text' placeholder={props.placeholder} id='myTextarea' className='Text_NoEdit_input' value={props.text} ref={textareaRef} />
    </div>
  )

}
