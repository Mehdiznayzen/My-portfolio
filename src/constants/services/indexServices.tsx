import React from 'react'
import './servicesStyle.css'
import Services from '../../components/myServices/services'

function IndexServices() {
    return (
        <section className='px-6 md:px-20 py-4 flex items-center justify-center' id='services'>
            <Services/>
        </section>
    )
}

export default IndexServices