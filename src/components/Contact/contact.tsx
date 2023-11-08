import React, { useEffect, useRef } from 'react'
import { MdAttachEmail } from 'react-icons/md'
import { BsWhatsapp, BsLinkedin, BsFillArrowRightCircleFill, BsSend } from'react-icons/bs'
import { TextField, colors, FormControl } from '@mui/material'
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import { contact } from '../../data/data';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useSelector } from 'react-redux/es/exports';

const btnVariant = {
    initial : {
        y : 200,
        x : 200
    },
    animate : {
        y : 0,
        x : 0,
        transition : {
            duration : 1.9,
        }
    }
}

const variantSocial = {
    initial : {
        y : 200,
        x : -200
    },
    animate : {
        y : 0,
        x : 0,
        transition : {
            duration : 1.9,
        }
    }
}

function Contact() {

    const color = useSelector((state) => state.cart.color)
    
    const divInputs = useRef(null)

    // For the animation of scroll 
    const isInView = useInView(divInputs, { once : true})
    const mainControls = useAnimation()
    useEffect(() => {
        if(isInView){
            mainControls.start('animate')
        }
    }, [isInView])

    return (
        <div ref={divInputs} className="contenu grid lg:flex items-center text-center text-gray-700 justify-center gap-36">
            <div className="part-talk grid items-center justify-center gap-6">
                <div className="title text-center flex items-center justify-center gap-3">
                    <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
                    <h2 className='text-base sm:text-2xl tracking-widest p-2 flex items-center justify-center rounded-lg' style={{border:'4px solid #006F88'}}>Talk to me</h2>
                    <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
                </div>
                {
                    contact.map((item) => (
                        <motion.div 
                            variants={variantSocial}
                            initial='initial'
                            animate={mainControls}
                            key={item.id} 
                            className="w-[300px] md:w-[300px] email-part grid items-center justify-center text-center p-3 rounded-lg gap-3" style={{border:'4px solid #006F88', background:`${color}`}}>
                            <div className="icon flex items-center justify-center text-xl">
                                {item.icon}
                            </div>
                            <h2 className='font-bold tracking-widest'>{item.title}</h2>
                            <p className='text-gray-500 font-semibold'>{item.compte}</p>
                            <a href={item.compte} className='flex items-center justify-center gap-2'>
                                write me
                                <BsFillArrowRightCircleFill/>
                            </a>
                        </motion.div>
                    ))
                }
            </div>
            <div className="write-part grid gap-10">
                <div className="title text-center flex items-center justify-center gap-3">
                    <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
                    <h2 className='text-base sm:text-2xl tracking-widest p-2 flex items-center justify-center rounded-lg' style={{border:'4px solid #006F88'}}>Write to me</h2>
                    <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
                </div>
                <div className="name-part">
                    <TextField
                        variant='filled'
                        label='Insert your name'
                        className='w-[100%] h-[100%] p-2 text-black'
                        style={{background:`${color}`, color:`#7C7B7A`, border:'none', 
                        borderRadius:'6px', outline:'none'}}
                    />
                </div>
                <div className="mail-part">
                    <TextField
                        variant='filled'
                        label='Insert your name'
                        className='w-[320px] h-[100%] p-2 text-black'
                        style={{background:`${color}`, color:`#7C7B7A`, border:'none', 
                        borderRadius:'6px', outline:'none'}}
                    />
                </div>
                <div className="project-part">
                    <TextField
                        variant='filled'
                        label='Insert your name'
                        className='w-[320px] h-[100%] p-2'
                        style={{background:`${color}`, color:`#7C7B7A`, border:'none', 
                        borderRadius:'6px', outline:'none'}}
                        rows={5}
                        multiline
                    />
                </div>
                <div className="btn-container-contact flex items-center justify-center">
                    <motion.button 
                        variants={btnVariant}
                        initial = 'initial'
                        animate = {mainControls}
                        className='flex items-center w-[200px] h-[50px] justify-center 
                        font-bold tracking-widest rounded-xl text-white gap-3'
                        style={{background:`${color}`, color:`#7c7b7a`}}
                    >
                        Send Message
                        <BsSend/>
                    </motion.button>
                </div>
            </div>
        </div>
    )
}

export default Contact