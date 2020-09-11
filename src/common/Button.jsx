import './Button.scss'
import React from 'react'

export default props => {
  return (
  <button className={ `button button--${props.type}` }
    onClick={ props.click }>
      { props.text }
  </button>
  )
}