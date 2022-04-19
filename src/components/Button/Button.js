/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import './Button.css'

function Button({ btnText }) {
  return (
      <>
        <button className="button-64" role="button"><span className="text">{btnText}</span></button>
      </>
  )
}

export default Button