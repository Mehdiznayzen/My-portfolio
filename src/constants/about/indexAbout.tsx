import React from 'react'
import './aboutStyle.css'
import About from '../../components/aboutMe/about'

function IndexAbout() {
    return (
        <section id='about' className='px-6 md:px-20 py-6 grid items-center justify-center md:justify-normal'>
            <About/>
        </section>
    )
}

export default IndexAbout