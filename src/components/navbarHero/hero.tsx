import React from 'react'
import heroImage from '../../assets/heroImage.png'
import { icon_social } from '../../data/data'
import { AiOutlineSend } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '../../assets/animation_lmq8bezn.json'
import { useSelector } from 'react-redux/es/exports';


function Hero() {
    const { color } = useSelector((state) => state.cart)
    return (
        <main className='px-6 py-20 md:px-20 xl:py-3 relative top-20 grid xl:flex gap-7 items-center justify-center xl:justify-between'>
            <motion.div
                initial={{
                    x : '-100vw'
                }}
                animate = {{
                    x : 0
                }}
                transition={{
                    delay : 0.2,
                    type : 'spring',
                    stiffness: 100
                }}
                className="info-hero text-center h-[100%] grid items-center justify-center lg:text-start">
                <p style={{color:`${color}`}} className='font-semibold tracking-widest text-xl md:text-4xl lg:5xl'>Hello ! My name is </p>
                <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold tracking-widest' style={{color : `${color}`}}>
                    <span className=''>Mehdi</span> Znayzen
                </h1>
                <p className='job' style={{color : `${color}`}}>I'm a Frontend Developer</p>
                <div className="icons-social-media items-center justify-normal flex gap-8">
                    {
                        icon_social.map((item) => (
                            <a href={item.link} target='_blank' key={item.id} className='cursor-pointer text-xl' style={{color:`${color}`}}>{item.icon}</a>
                        ))
                    }
                </div>
                <motion.button 
                    animate={{
                        scale:[0.5, 1.5]
                    }}
                    transition={{
                        duration : 0.4,
                        repeat:Infinity,
                        repeatType:'reverse',
                        ease : 'linear'
                    }}
                    className='w-[180px] px-4 md:w-[300px] flex items-center justify-center gap-4' 
                    style={{color:`${color}`, border:`3px solid ${color}`}}>
                    Let's Talk
                    <AiOutlineSend/>
                </motion.button>
            </motion.div>
            <motion.div
                initial = {{
                    x : '100vw'
                }}
                animate={{
                    x : 0
                }}
                transition={{
                    delay : 0.2,
                    type : 'spring',
                    stiffness : 40
                }}
                className="img-container block">
                {/* <img src={heroImage} className='w-[600px]' style={{filter: `drop-shadow(0 0 1em ${color})`}} alt="" /> */}
                <Lottie animationData={animationData} className='w-[300px] sm:w-[500px] md:w-[650px]'/>
            </motion.div>
        </main>
    )
}

export default Hero