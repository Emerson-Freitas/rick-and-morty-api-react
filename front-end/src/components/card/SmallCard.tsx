import React from 'react'
import styles from './SmallCard.module.css'

interface Props{
    name?: string 
    air_date?: string 
    episode?: string 
    isEpisode: boolean
    nameLocation?: string
    type?: string

}
const SmallCard = ({name, air_date, episode, isEpisode, nameLocation, type}: Props) => {
  return (
    <div className={styles.card}>
        <div className={styles.container}>
          {isEpisode ? (
            <>
              <h3>{name}</h3>
              <p>{episode}</p>
              <p>{air_date}</p>
            </>
          ) : (
            <>
              <h3>{nameLocation}</h3>
              <p>{type}</p>
            </>
          )}
        </div>
    </div>
  )
}

export default SmallCard