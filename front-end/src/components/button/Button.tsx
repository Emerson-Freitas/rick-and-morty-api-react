import { useEffect, useState } from 'react'
import styles from './Button.module.css'
import { ICharacter } from '../../interfaces/ICharacter'
import axios from 'axios'

interface Props {
    next: string
    prev: string
    text: string
    setButtonVisibility: (isVisible: boolean) => void
}
const Button = ({next, prev, text, setButtonVisibility}: Props) => {

  const [data, setData] = useState<ICharacter[]>([])
  const [visible, setVisible] = useState<boolean>(true)

  const handleClick = async() => {
    try {
      if(next !== null || next !== undefined) {
        const res = await axios.get(next)
        setData(res.data)
        setButtonVisibility(true)
      } else{
        setVisible(false)
        setButtonVisibility(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log('data onClick', data)
  }, [data])

  return (
    <button className={styles.content} onClick={handleClick}>{text}</button>
  )
}

export default Button