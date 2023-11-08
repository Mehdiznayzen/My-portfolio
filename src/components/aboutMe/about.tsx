import React, { useRef, useEffect } from 'react'
import img_about from '../../assets/image-about.png'
import { motion, useAnimation, useInView } from 'framer-motion'
import Lottie from 'lottie-react'
import animationData from '../../assets/about animation.json'
import { useSelector } from 'react-redux';

const variantImage = {
    initial : {
        x : '-100vw'
    },
    animate : {
        x : 0,
        transition : {
            delay : 0,
            type : 'spring',
            stifness : 100
        }
    }
}

const variantInfo = {
    initial : {
        x : '100vw',
    },
    animate : {
        x : 0, 
        transition : {
            delay : 0.1,
            type : 'spring',
            stifness : 400
        }
    }
}

function About() {
    const { color } = useSelector((state) => state.cart)

    const ref = useRef(null)
    const isInview = useInView(ref, { once : true})

    const mainControls = useAnimation()
    useEffect(() => {
        if(isInview){
            mainControls.start('animate')
        }
    }, [isInview])

    return (
        <div ref={ref} className="contenu grid lg:flex items-center justify-center lg:justify-between gap-10">
            <motion.div
                variants={variantImage}
                initial='initial'
                animate={mainControls}
                className="info-about">
                <Lottie animationData={animationData} className='w-[100%] md:w-[600px] lg:w-[500px]'/>
                {/* <img src={img_about} width={'600px'} alt="" /> */}
            </motion.div>
            <motion.div 
                variants={variantInfo}
                initial='initial'
                animate={mainControls}
                className="img-about-container grid gap-10 text-center lg:text-start">
                <div className="title text-center justify-center flex items-center gap-3">
                    <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
                    <h2 className='text-2xl tracking-widest w-[200px] h-[50px] flex items-center justify-center rounded-lg' style={{border:'4px solid #006F88'}}>About Me</h2>
                    <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
                </div>
                <p style={{color:`${color}`}} className='text-[14px] text-center md:text-[16px] tracking-widest leading-[30px] md:leading-[40px] grid'>
                    <span>I'm Mehdi Znayzen. </span>
                    Web development student passionate about creating exceptional <br />
                    user experiences. Proficiency in front-end programming  <br />
                    languages and Python for web development. Always enthusiastic <br />
                    about learning new technologies and solving complex problems. <br />
                </p>
                <div className="btn-container-about flex items-center justify-center">
                    <motion.button 
                        style={{background:`${color}`}}
                        whileHover={{
                            scale:1.2
                        }}
                        className='cursor-pointer w-[300px]'>
                        <a href="https://www.linkedin.com" style={{color:'#000'}}>More about me</a>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    )
}

export default About