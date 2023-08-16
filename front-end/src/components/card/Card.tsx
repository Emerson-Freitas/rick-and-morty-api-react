import { ICharacter } from '../../interfaces/ICharacter'
import styles from './Card.module.css'

interface Props {
  value: ICharacter
}
const Card = ({value}: Props) => {
  return (
    <div className={styles.card}>
      <img style={{width: '100%', height: '70%'}} src={value.image} alt={`Imagem do Personagem: ${value.name}`}/>
        {value.name.length > 20 ? (
        <div className={styles.content}>
            <h2 style={{fontSize: '18px'}}>{value.name}</h2>
            <p>{value.species}</p>
          </div>
        ) : (
          <div className={styles.content} >
            <h2 style={{fontSize: '20px'}}>{value.name}</h2>
            <p>{value.species}</p>
          </div>
        )}
        
    </div>
  )
}

export default Card