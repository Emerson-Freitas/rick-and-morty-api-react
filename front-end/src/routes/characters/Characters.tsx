import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import LogoName from '../../assets/logo-characters.png'
import Select from '../../components/select/Select'
import Input from '../../components/input/Input'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ICharacter } from '../../interfaces/ICharacter'
import Container from '../../components/container/Container'
import styles from './Character.module.css'
import Card from '../../components/card/Card'
import Button from '../../components/button/Button'

const Characters = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([])
  const [selectedValues, setSelectedValues] = useState<any>({
    species: '',
    gender: '',
    status: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [next, setNext] = useState<string>('')
  const [prev, setPrev] = useState<string>('')
  const [loadMoreCharacters, setLoadMoreCharacters] = useState<ICharacter[]>([...characters])
  const [isVisibleButton, setIsVisibleButton] = useState<boolean>(true)

  const handleButtonVisibility = (isVisible: boolean) => {
    setIsVisibleButton(isVisible)
  }

  const handleSelectChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
    selectName: string
  ) => {
    setSelectedValues({
      ...selectedValues,
      [selectName]: event.target.value,
    });
  };

  useEffect(() => {
      const getCharacteres = async() => {
        try {
          const url = import.meta.env.VITE_URL
          const res = await axios.get(`${url}character`)
          setCharacters(res.data.results)
          setNext(res.data.info.next)
          setPrev(res.data.info.prev)
        } catch (error) {
          console.log(error)
        }
      }
      getCharacteres()
  }, [])

  useEffect(() => {
      const getCharacteresByFilters = async() => {
        try {
          const url = import.meta.env.VITE_URL
          const res = await axios.get(`${url}character?gender=${selectedValues.gender}&species=${selectedValues.species}&status=${selectedValues.status}`)
          setIsLoading(true)
          setCharacters(res.data.results)
          setNext(res.data.info.next)
          setPrev(res.data.info.prev)
        } catch (error) {
          console.log(error)
        }
      }
      getCharacteresByFilters()
  }, [selectedValues])

  return (
    <>
        <Header/>
        <Container>
        <div className={styles.logo}>
          <img src={LogoName} alt="Rick And Morty"/>
        </div>
          <div className={styles.container_filters}>
            <Input placeHolder={"Filter by name"}/>
            <Select 
                values={[
                  'Human',
                  'Alien',
                  'Humanoid',
                  'Mythological Creature',
                  'Animal',
                  'Robot',
                  'Cronenberg'
                ]}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleSelectChange(e, 'species')
                }
              />
              <Select 
                values={[
                  'Female',
                  'Male',
                  'GenderLess',
                  'Unknown'
                ]}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleSelectChange(e, 'gender')
                }
              />
              <Select 
                values={[
                  'Alive',
                  'Dead',
                  'Unknown'
                ]}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleSelectChange(e, 'status')
                }
              />
          </div>
          <section className={styles.section}>
              {characters.map((character: ICharacter) => (
                <div key={character.id}>
                  <Card value={character}/>
                </div>
              ))}
            <div className={styles.loadMore}>
              <Button
                text={"LOAD MORE"}
                next={next}
                prev={prev}
                setButtonVisibility={handleButtonVisibility}
              />
            </div>
          </section>
        </Container>
        <Footer/>
    </>
  )
}

export default Characters