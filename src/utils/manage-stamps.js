const LIST_NAME = 'timelist'
const MAX_ITEMS = 10

export function getTimeListData() {
  const list = JSON.parse(localStorage.getItem(LIST_NAME)) || []
  return list
}

export function addToTimeListData({value}) {
  const list = getTimeListData()
  while (list.length >= MAX_ITEMS) list.pop()

  const date = new Date()
  const localeTime = date.toLocaleTimeString('pt-BR')
  const localeDate = date.toLocaleDateString('pt-BR')
  const currentDate = `${localeDate} - ${localeTime}`

  const id = list[0] ? list[0].id + 1 : 1

  list.unshift({id, currentDate, value})

  localStorage.setItem(LIST_NAME, JSON.stringify(list))
}
