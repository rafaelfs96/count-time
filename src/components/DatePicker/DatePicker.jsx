import React from 'react'

import InputDate from '../../common/InputDate/InputDate'

export default ({ change, useNow, scss, id, text, value }) => {
  const dateChangeHandler = inputValue => {
    change({date: inputValue, useNow})
  }

  const useNowChangeHandler = e => {
    change({ date: value, useNow: !useNow})
  }

  return (
    <div className={ scss }>
      <label htmlFor={ id }>{ text }: </label>
      <InputDate value={ value } id={ id } name={ id }
        isDisable={ useNow } onChange={ dateChangeHandler } />
      <div>
        <label htmlFor={ `use-now_${id}` }>Usar data atual?</label>
        <input type='checkbox' name={ `use-now_${id}` } id={ `use-now_${id}` }
          value={ useNow } onChange={ useNowChangeHandler } checked={ useNow } />
      </div>
    </div>
  )
}
