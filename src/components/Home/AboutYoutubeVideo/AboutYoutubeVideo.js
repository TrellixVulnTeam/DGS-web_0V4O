/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react'
import Youtube from '../../Youtube'
import DisqusSection from '../DisqusSection/DisqusSection'
import './AboutYoutubeVideo.css'

function AboutYoutubeVideo() {
  const [isShow, setIsShow] = useState(false);
  const ToggleMode = () => {
    setIsShow(!isShow);
  }
  return (
    <>
       <div className="ContainerX">
        <button className='btn_x' onClick={ToggleMode} > See More </button>
      </div>
       {isShow &&  ( 
         <>
          <Youtube />  
          <DisqusSection />
         </>
       )}
    </>
  )
}

export default AboutYoutubeVideo