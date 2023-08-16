import { ReactNode } from 'react'
import styles from './Main.module.css'
import Card from '../card/Card'
import { ICharacter } from '../../interfaces/ICharacter'
import Loading from '../loading/Loading'
import Button from '../button/Button'
import { useState, useEffect } from 'react'
import { IEpisode } from '../../interfaces/IEpisode'
import SmallCard from '../card/SmallCard'

interface Props {
  logoName: string
  cards?: ICharacter[]
  smallCards?: IEpisode[]
  typeSmallCard: boolean
  filters?: ReactNode[]
  isLoading?: boolean
  next?: string | null
  prev?: string | null
}

const Main = ({logoName, cards, smallCards, filters, next, prev, typeSmallCard}:Props) => {
  const [isVisibleButton, setIsVisibleButton] = useState<boolean>(true)

  const handleButtonVisibility = (isVisible: boolean) => {
    setIsVisibleButton(isVisible)
  }

  useEffect(() => {
    console.log('isVisibleButton', isVisibleButton)
  }, [isVisibleButton])

  return (
    <div className={styles.main}>
      <div className={styles.logo}>
        <img src={logoName} alt="Rick And Morty"/>
      </div>
      <div className={styles.container} >
        {filters?.map((filter: ReactNode, index:number) => (
          <div key={index}>
            {filter}
          </div>
        ))}
      </div>
      <section className={styles.section}>
        {!typeSmallCard ? (
          cards?.map((card: ICharacter) => (
            <div key={card.id} style={{marginBottom: '2%'}}>
              <Card value={card}/>
            </div>
          ))
        ) : (
          smallCards?.map((smallCard: IEpisode) => (
            <div key={smallCard.id}>
              <SmallCard 
                name={smallCard.name} 
                episode={smallCard.episode}
                air_date={smallCard.air_date}
              />
            </div>
          ))
        )}
      <div className={styles.loadMore}>
          <Button 
            next={next} 
            prev={prev} 
            text={"LOAD MORE"}
            setButtonVisibility={handleButtonVisibility}
          />
      </div>
      </section>
    </div>
  )
}

export default Main;