import Main from '../components/main/Main'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import LogoName from '../assets/logo-characters.png'
import Select from '../components/select/Select'
import Input from '../components/input/Input'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { ICharacter } from '../interfaces/ICharacter'

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

  useEffect(() => {
    
  }, [characters])

  return (
    <>
        <Header/>
        <Main
          isLoading={isLoading}
          logoName={LogoName}
          cards={characters}
          next={next}
          prev={prev}
          typeSmallCard={false}
          filters={
            [
              <Input placeHolder={"Filter by name"}/>,
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
              />,
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
              />,
              <Select 
                values={[
                  'Alive',
                  'Dead',
                  'Unknown'
                ]}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleSelectChange(e, 'status')
                }
              />,
            ]
          }
        />
        <Footer/>
    </>
  )
}

export default Characters