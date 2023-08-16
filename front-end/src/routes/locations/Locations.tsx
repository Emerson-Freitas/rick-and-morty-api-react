import React, { useState, useEffect } from 'react'
import Main from '../../components/main/Main'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Input from '../../components/input/Input'
import Logo from '../assets/logo-locations.svg'
import { ILocation } from '../../interfaces/ILocation'
import axios from 'axios'
import Container from '../../components/container/Container'
function Locations() {
    const [cards, setCards] = useState<ILocation[]>([])

    useEffect(() => {
        const getAllLocations = async () => {
            try {
                const url = `${import.meta.env.VITE_URL}location`
                const res = await axios.get(url)
                setCards(res.data)
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
                <div>
                    <h1>ola mundo</h1>
                </div>
            </Container>
                {/* <Main
                    logoName={Logo}
                    smallCards={cards}
                    typeSmallCard={true}
                    isEpisode={false}
                    filters={[
                        <Input placeHolder={"Filter by name or episode (ex. S01 or S01E02)"} width='500px'/>
                    ]}
                /> */}
            <Footer/>
        </>
    )
}

export default Locations