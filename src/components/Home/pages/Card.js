import React from 'react'
import Moment from "react-moment";
import logo from '../../Images/Website logo.png'
import DisqusSection from '../DisqusSection/DisqusSection';

import './Card.css'

function Card({id, post, postPage}) {
  return (
    <div className="Card">
      <div className="sm-box">
        <div className="header">
          
          <div className="titleX">
            {/* <img 
             src={logo}
             alt="" /> */}
            <h4>{post?.title}</h4>
            <p>id : {id}</p>
          </div>
          <Moment fromNow>{post?.timestamp?.toDate()}</Moment>
        </div>
        <div className="card-body">
            <p className='text'>{post?.text}</p>
        </div>
        {postPage && (
          <DisqusSection />
        )}
      </div>
    </div>
  )
}

export default Card