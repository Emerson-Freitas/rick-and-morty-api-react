import React, { useState, useEffect }from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Main from '../../components/main/Main'
import Logo from '../../assets/logo-episodes.png'  
import { IEpisode } from '../../interfaces/IEpisode'
import Input from '../../components/input/Input'
import axios from 'axios'

const Episodes = () => {
    const [cards, setCards] = useState<IEpisode[]>([])

    useEffect(() => {
        const getAllEpisodes = async () => {
            try {
                const url = `${import.meta.env.VITE_URL}episode`
                const res = await axios.get(url)
                setCards(res.data.results)
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
            <Main
                logoName={Logo}
                smallCards={cards}
                typeSmallCard={true}
                isEpisode={true}
                filters={[
                    <Input placeHolder={"Filter by name or episode (ex. S01 or S01E02)"} width='500px'/>
                ]}
            />
            <Footer/>
        </>
    )
}

export default Episodes