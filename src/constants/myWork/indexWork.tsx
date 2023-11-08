import React from 'react'
import './worlStyle.css'
import MyWork from '../../components/myWork/myWork'

function IndexWork() {
    return (
        <section id='myWork' className='px-6 md:px-20 py-6'>
            <div className="container mx-auto">
                <MyWork/>
            </div>
        </section>
    )
}

export default IndexWork