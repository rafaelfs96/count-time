import './Button.scss'
import React from 'react'

export default ({ type, onClick, value }) => {
  return (
  <button className={ `button button--${ type }` }
    onClick={ onClick }>
      { value }
  </button>
  )
}