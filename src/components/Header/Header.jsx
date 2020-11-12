import './Header.scss'

import React from 'react'

import Button from '../../common/Button/Button'

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
  return (
    <header className='Header'>
      <Button type='primary' value='change theme' onClick={changeTheme} />
    </header>
  )
}

export default Header