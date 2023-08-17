import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Input from '../../components/input/Input'
import Logo from '../../assets/logo-locations.svg'
import { ILocation } from '../../interfaces/ILocation'
import axios from 'axios'
import Container from '../../components/container/Container'
import styles from './Location.module.css'
import SmallCard from '../../components/card/SmallCard'
import Button from '../../components/button/Button'
import Select from '../../components/select/Select'
const Locations = () => {
    const [cards, setCards] = useState<ILocation[]>([])
    const [isVisibleButton, setIsVisibleButton] = useState<boolean>(true)
    const [next, setNext] = useState<string>('')
    const [prev, setPrev] = useState<string>('')
    const [selectedValues, setSelectedValues] = useState<any>({
        species: '',
        gender: '',
        status: '',
    });

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
        const getAllLocations = async () => {
            try {
                const url = `${import.meta.env.VITE_URL}location`
                const res = await axios.get(url)
                setCards(res.data.results)
                setNext(res.data.info.next)
                setPrev(res.data.info.prev)
            } catch (error) {
                console.log(error)
            }
        }
        getAllLocations()
    }, [])

    return (
        <>
            <Header/>
            <Container>
                <div className={styles.logo}>
                    <img src={Logo} alt="Rick And Morty"/>
                </div>
                <div className={styles.container_filters}>
                    <Input placeHolder={"Filter by name"} width={'326px'}/>
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
                    {cards.map((card: ILocation) => (
                        <div key={card.id}>
                            <SmallCard 
                                isEpisode={false}
                                nameLocation={card.name}
                                type={card.type}
                            />
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

export default Locations