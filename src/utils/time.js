export const time = () => {
  const date = new Date()

  const day = date.getUTCDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return { day, month, year, hour, minute, second }
}

export const format = ({day, month, year, hour, minute, second}) => {
  day = day < 10 ? `0${day}` : day
  month = month < 10 ? `0${month}` : month
  hour = hour < 10 ? `0${hour}` : hour
  minute = minute < 10 ? `0${minute}` : minute
  second = second < 10 ? `0${second}` : second

  return { day, month, year, hour, minute, second }
}

export const timeBetween = ({startDate = new Date(), endDate = new Date()}) => {
  let delta = Math.abs(endDate - startDate) / 1000
  const isNegative = startDate > endDate ? -1 : 1

  const time = [
    ['weeks', 7 * 24 * 60 * 60],
    ['days', 24 * 60 * 60],
    ['hours', 60 * 60],
    ['minutes', 60],
    ['seconds', 1]
  ].reduce((acc, [key, value]) => {
    let temp = Math.floor(delta / value)
    if (temp === 0) return acc
    else return (acc[key] = temp * isNegative, delta -= acc[key] * isNegative * value, acc)
  }, {})

  let finalTime = []

  for (const unit in time) {
      finalTime.push(`${time[unit]} ${unit}`)
  }

  return finalTime.join(', ')
}
