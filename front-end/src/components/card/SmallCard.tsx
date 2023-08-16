import React from 'react'
import styles from './SmallCard.module.css'

interface Props{
    name: string
    air_date: string
    episode: string

}
const SmallCard = ({name, air_date, episode}: Props) => {
  return (
    <div className={styles.card}>
        <div className={styles.container}>
            <h3>{name}</h3>
            <p>{episode}</p>
            <p>{air_date}</p>
        </div>
    </div>
  )
}

export default SmallCard