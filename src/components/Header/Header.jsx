import styles from './Header.module.scss'

import React from 'react'

import Button from '../../common/Button/Button'

function Header({ setTheme, theme }) {
  const changeTheme = () => {
    if(theme === 'dark') setTheme('light')
    else if(theme === 'light') setTheme('dark')
  }
  return (
    <header className={ styles.Header }>
      <Button type='primary' value='change theme' onClick={changeTheme} />
    </header>
  )
}

export default Header