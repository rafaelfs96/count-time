import './Footer.scss'

import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='Footer'>
      © {currentYear} Made by <a className='link' href="https://github.com/rafaelfs96" target='_blank'>rafaelfs96</a>
    </footer>
  )
}

export default Footer