import './Header.scss'

import React from 'react'

import IconButton from '../../common/IconButton/IconButton'

function Header({ setTheme, theme }) {
  const changeTheme = () => {
    if(theme === 'dark') {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    } else if(theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  const icon = theme === 'dark' ? 'sun' : 'moon'
  return (
    <header className='Header'>
      <IconButton type='solid' icon={icon} onClick={changeTheme} />
    </header>
  )
}

export default Header