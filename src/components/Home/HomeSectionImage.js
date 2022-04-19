import React from 'react'

import Button from '../Button/Button'
import './HomeSectionVideo.css'

function HomeSectionImage({title, description, btnText, url}) {
  return (
    <div className='container'>
        <div className="box">
            <h1 className='title'>{title}</h1>
            <span className='description'> {description} </span>
            <div className="btnClass">
               <a href="mailto:info@danielgamestudios.com" style={{textDecoration: 'none'}}><Button btnText={btnText}/></a>
            </div>
        </div>
    </div>
  )
}

export default HomeSectionImage