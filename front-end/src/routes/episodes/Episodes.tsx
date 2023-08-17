import React, { useState, useEffect }from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Logo from '../../assets/logo-episodes.png'  
import { IEpisode } from '../../interfaces/IEpisode'
import Input from '../../components/input/Input'
import axios from 'axios'
import Container from '../../components/container/Container'
import SmallCard from '../../components/card/SmallCard'
import styles from './Episode.module.css'
import Button from '../../components/button/Button'

const Episodes = () => {
    const [cards, setCards] = useState<IEpisode[]>([])
    const [next, setNext] = useState<string>('')
    const [prev, setPrev] = useState<string>('')
    const [isVisibleButton, setIsVisibleButton] = useState<boolean>(true)

    const handleButtonVisibility = (isVisible: boolean) => {
        setIsVisibleButton(isVisible)
    }

    useEffect(() => {
        const getAllEpisodes = async () => {
            try {
                const url = `${import.meta.env.VITE_URL}episode`
                const res = await axios.get(url)
                setCards(res.data.results)
                setNext(res.data.info.next)
                setPrev(res.data.info.prev)
            } catch (error) {
                console.log(error)
            }
        }
        getAllEpisodes()
    }, [])

    useEffect(() => {
        console.log(cards)
    }, [cards])

    return (
        <>
            <Header/>
            <Container>
            <div className={styles.logo}>
                <img src={Logo} alt="Rick And Morty"/>
            </div>
            <div className={styles.container_filters}>
                <Input 
                    placeHolder={"Filter by name or episode (ex S01 or S01E02)"}
                    width={"500px"}
                />
            </div>
            <section className={styles.section}>
                {cards.map((episode: IEpisode) => (
                    <div key={episode.id}>
                    <SmallCard
                        isEpisode={true}
                        name={episode.name}
                        air_date={episode.air_date}
                        episode={episode.episode}
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

export default Episodes