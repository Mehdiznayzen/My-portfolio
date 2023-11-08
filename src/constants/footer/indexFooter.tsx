import React from 'react'
import './footerStyle.css'
import Contact from '../../components/Contact/contact'

function IndexFooter() {
    return (
        <section id='contact' className='px-6 md:px-20 py-6 grid items-center justify-center md:justify-normal'>
            <Contact/>
        </section>
    )
}

export default IndexFooter