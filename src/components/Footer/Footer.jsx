import './Footer.scss'

import React from 'react'

function Footer() {
  const createdYear = 2020
  const currentYear = new Date().getFullYear()
  return (
    <footer className='Footer'>
      © {createdYear} - {currentYear} Made by <a className='link' rel='noreferrer' href="https://github.com/rafaelfs96" target='_blank'>rafaelfs96</a>
    </footer>
  )
}

export default Footer