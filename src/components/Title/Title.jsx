import React from 'react'
import './Title.css'

const Title = ({ text1, text2 }) => {
  return (
    <div className='custom-title'>

        <p className='title-text'>{text1}<span className='highlighted-text'>{text2}</span></p>
      
    </div>
  )
}

export default Title
