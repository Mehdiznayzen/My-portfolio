import React from 'react'
import Client from './../../components/clientComponent/client';
import './styleClient.css'

function IndexClient() {
    return (
        <section id='client' className='px-6 md:px-20 py-6 grid justify-center'>
            <Client/>
        </section>
    )
}

export default IndexClient