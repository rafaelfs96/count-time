import './Button.scss'
import React from 'react'

function Button({ type, onClick, value }) {
  return (
  <button className={ `button button--${ type }` }
    onClick={ onClick }>
      { value || '' }
  </button>
  )
}

export default Button