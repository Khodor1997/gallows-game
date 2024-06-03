// 'https://api.randomdatatools.ru/?unescaped=false&params=FirstName'
import axios from 'axios'

export const getRandomName = async () => {
  const { data } = await axios<{ FirstName: String }>(
    'https://api.randomdatatools.ru/?unescaped=false&params=FirstName'
  )
  return data.FirstName
}
