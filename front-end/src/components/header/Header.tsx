import styles from './Header.module.css'
import Logo from '../../assets/logo-black 1.svg'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={Logo} alt="Logo - Rick And Morty"/>
      <div className={styles.groupContent} >
        <Link style={{textDecoration: 'none'}} to={'/characters'}><p className={styles.content}>Personagens</p></Link>
        <Link style={{textDecoration: 'none'}} to={'/locations'}><p className={styles.content}>Localizações</p></Link>
        <Link style={{textDecoration: 'none'}} to={'/episodes'}><p className={styles.content}>Episódios</p></Link>
      </div>
      
    </header>
  )
}

export default Header