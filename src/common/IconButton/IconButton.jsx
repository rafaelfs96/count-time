import './IconButton.scss'
import React from 'react'

function IconButton({ icon, onClick, type }) {
  const iconTypeLibrary = {
    brand: 'fab',
    solid: 'fas'
  };

  return (
    <span className='IconButton' onClick={ onClick }>
      <i className={`${iconTypeLibrary[type]} fa-${icon}`}></i>
    </span>
  )
}

export default IconButton