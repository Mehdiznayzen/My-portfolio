import React from 'react'
import './homeStyle.css'
import Navbar from '../../components/navbarHero/navbar'
import Hero from '../../components/navbarHero/hero'
import ScrollProgress from '../../components/scrollProgress/scrollProgress'
import ScrollTop from '../../components/scrollTop/scrollTop'

function IndexHome() {
    return (
        <section className='p-3' id='home'>
            <ScrollProgress/>
            <Navbar/>
            <Hero/>
            <ScrollTop/>
        </section>
    )
}

export default IndexHome