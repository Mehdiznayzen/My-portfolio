import React, { useState } from 'react'
import { client } from '../../data/data'
import { MdOutlineKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useSelector } from 'react-redux/es/exports'

function Client() {
    const color = useSelector((state) => state.cart.color)

    const [index, setIndex] = useState(0)
    const { id, profile, name, info} = client[index]

    // Function for check the number of client
    const checkClient = (number) => {
        if(number > client.length - 1){
            return 0
        }else if(number < 0){
            return client.length - 1
        } 
        return number
    }

    // Function for the previous client
    const prevClient = () => {
        setIndex((index) => {
            let newClient = index - 1
            return checkClient(newClient)
        })
    }

    // Function for the next client
    const nextClient = () => {
        setIndex((index) => {
            let newClient = index + 1
            return checkClient(newClient)
        })
    }

    return (
        <div className='relative contenu grid items-center justify-center gap-10'>
            <div className="titles grid gap-10">
                <div className="title text-center flex items-center justify-center gap-3">
                    <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
                    <h2 className='text-base sm:text-2xl tracking-widest p-2 flex items-center justify-center rounded-lg' style={{border:'4px solid #006F88'}}>Testimonial</h2>
                    <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
                </div>
                <p className='text-center font-bold tracking-widest text-[20px]' style={{color:`${color}`}}>My client Saying</p>
            </div>
            <div className="reviews grid md:flex items-center justify-center gap-7">
                <div onClick={prevClient} style={{color:`${color}`}} className="icon-left text-5xl cursor-pointer flex items-center justify-center">
                    <MdOutlineKeyboardArrowLeft />
                </div>
                <article key={id} style={{background:`${color}`}} className='review w-[100%] md:w-[500px] rounded-lg p-4 grid gap-4 items-center justify-center text-center'>
                    <div className="img-container flex items-center justify-center">
                        <img className='w-[100%] md:w-[200px] h-[100%] md:h-[200px] rounded-full' style={{border:'4px solid gray'}} src={profile} alt="" />
                    </div>
                    <div className="info-review">
                        <h1 className='font-bold tracking-widest text-blue-950 text-xl'>{name}</h1>
                        <p className='text-xs md:text-lg text-blue-800'>{info}</p>
                    </div>
                </article>
                <div onClick={nextClient} style={{color:`${color}`}} className="icon-right flex items-center justify-center text-5xl font-bold cursor-pointer">
                    <MdKeyboardArrowRight/>
                </div>
            </div>
        </div>
    )
}

export default Client