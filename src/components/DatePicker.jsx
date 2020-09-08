import React from 'react'

export default props => {
  const dateChangeHandler = e => {
    props.change({date: e.target.value, useNow: props.useNow})
  }

  const useNowChangeHandler = e => {
    props.change({ date: props.value, useNow: !props.useNow})
  }

  return (
    <div className='datepicker'>
      <label htmlFor={ props.id }>{ props.text }: </label>
      <input type='datetime-local' disabled={ props.useNow } name={ props.id }
        id={ props.id } value={ props.value } onChange={ dateChangeHandler }/>
      <label htmlFor={ `use-now_${props.id}` }>Usar data atual?</label>
      <input type='checkbox' name={ `use-now_${props.id}` } id={ `use-now_${props.id}` }
        value={ props.useNow } onChange={ useNowChangeHandler }/>
    </div>
  )
}
