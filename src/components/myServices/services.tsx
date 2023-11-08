import React, { useEffect, useRef, useState } from 'react'
import { services } from '../../data/data'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useSelector } from 'react-redux';

// Importer les bibliotheques pour creer un slider
import { Swiper, SwiperSlide } from 'swiper/react';
// the variants for the cards services
const variantService1 = {
    initial : {
        y : 200
    },
    animate : {
        y : 0, 
        transition : {
            duration : 1.2,
        }
    }
}


function Services() {
    const color = useSelector((state) => state.cart.color)
    const [showMore, setShowMore] = useState(null)

    // For the animation trigger scroll
    const ref = useRef(null)
    const isInView = useInView(ref, { once : true })
    const mainControls = useAnimation()

    useEffect(() => {
        if(isInView){
            mainControls.start('animate')
        }
    }, [isInView])



    const handleProgressSpan = () => {
        let spans = document.querySelectorAll('.progess span')
        let sectionAbout = document.getElementById("about")
    
        if(window.scrollY >= sectionAbout?.offsetTop + 100){
            spans.forEach((span) => {
                span.style.width = span.dataset.width
            })
        }else {
            spans.forEach((span) => {
                span.style.width = `${0}%`
            })
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleProgressSpan)
    }, [])

    return (
        <div ref={ref} className="contenu grid items-center justify-center gap-12">
            <div className="title text-center flex items-center justify-center gap-3">
                <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
                <h2 className='text-2xl tracking-widest w-[200px] h-[50px] flex items-center justify-center rounded-lg' style={{border:'4px solid #006F88'}}>My services</h2>
                <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
            </div>
            <div className='grid items-center justify-normal'>
                <div style={{border:`4px solid ${color}`}} className="jobs gap-7 w-[100%] p-3 grid rounded-2xl">
                    <div className="progress-container grid gap-5">
                        <div className="progress-1 grid gap-2">
                            <div className="title flex items-center justify-between">
                                <h4 className='font-bold mdtracking-widest' style={{color:`${color}`}}>Front-End Development</h4>
                                <p className='font-semibold' style={{color:`${color}`}}>100%</p>
                            </div>
                            <div className="progess relative w-[100%] h-[20px] rounded-xl border-2">
                                <span className='absolute top-0 left-0 w-[0%] h-[100%] rounded-xl' style={{background:`${color}`}} data-width='100%'></span>
                            </div>
                        </div>
                        <div className="progress-1">
                            <div className="title flex items-center justify-between">
                                <h4 className='font-bold mdtracking-widest' style={{color:`${color}`}}>Back-End Developement</h4>
                                <p className='font-semibold' style={{color:`${color}`}}>70%</p>
                            </div>
                            <div className="progess relative w-[100%] h-[20px] rounded-xl border-2">
                                <span className='absolute top-0 left-0 w-[0%] h-[100%] rounded-xl' style={{background:`${color}`}} data-width='70%'></span>
                            </div>
                        </div>
                        <div className="progress-1">
                            <div className="title flex items-center justify-between">
                                <h4 className='font-bold mdtracking-wides' style={{color:`${color}`}}>UI/UX</h4>
                                <p className='font-semibold' style={{color:`${color}`}}>50%</p>
                            </div>
                            <div className="progess relative w-[100%] h-[20px] rounded-xl border-2">
                                <span className='absolute top-0 left-0 w-[0%] h-[100%] rounded-xl' style={{background:`${color}`}} data-width='50%'></span>
                            </div>
                        </div>
                    </div>
                    <button style={{background:'#006F88'}} className='h-[40px] rounded-lg cursor-pointer font-bold tracking-widest'><a href="../../../../cv-Mehdi-Znayzen.pdf" style={{color:`${color}`}} download>Download CV</a></button>
                </div>
            </div>
            {/* Slider services */}
            <div
                className="services swiper-container"
            >
                {
                    services.map((item) => (
                        <motion.article 
                            variants={variantService1}
                            initial='initial'
                            animate={mainControls}
                            className='service-1 text-center relative overflow-hidden p-1'
                            style={{border:`4px solid ${color}`}}
                        >
                            <div className="img-container flex items-center justify-center">
                                <img src={item.photos} className={`h-[250px] w-[100%] rounded-xl`} alt="" />
                            </div>
                            <div className={`info-service h-full w-full grid items-center justify-center text-center`}>
                                <h2 className="font-bold text-[20px]" style={{color:`${color}`}}>{item.title}</h2>
                                <p 
                                    className='text-[16px]' 
                                    style={{color:`${color}`}}
                                >
                                    {showMore === item.id ? item.description : item.description.substring(200)}
                                    <p onClick={() => {showMore ? setShowMore(null) : setShowMore(item.id)}} className='text-gray-500'>
                                        {
                                            showMore === item.id ? 'Show less.' :'Show more...'
                                        }
                                    </p>
                                </p>
                            </div>
                        </motion.article>
                    ))
                }
            </div>
        </div>
    )
}

export default Services