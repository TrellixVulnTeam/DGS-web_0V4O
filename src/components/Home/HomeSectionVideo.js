/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'

import Button from '../Button/Button'
// import videoUrl from '../Video/Gaming Game Over Video.mp4'
import './HomeSectionVideo.css'

function HomeSectionVideo({title, description, btnText}) {
  return (
    <div className='container'>
        {/* <video src={videoUrl}  autoPlay loop muted /> */}
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

export default HomeSectionVideo