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