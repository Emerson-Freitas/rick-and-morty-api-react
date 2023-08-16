import React from 'react'
import styles from './SmallCard.module.css'

interface Props{
    name?: string | undefined
    air_date?: string | undefined
    episode?: string | undefined
    type?: string | undefined

}
const SmallCard = ({name, air_date, episode, type}: Props) => {
  return (
    <div className={styles.card}>
        <div className={styles.container}>
            <h3>{name}</h3>
            <p>{episode}</p>
            <p>{air_date}</p>
            <p>{type}</p>
        </div>
    </div>
  )
}

export default SmallCard