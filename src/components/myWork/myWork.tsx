import React, { useState, useEffect, useRef } from 'react'
import { myWork } from '../../data/data'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { motion, useAnimation, useInView } from 'framer-motion';
import { useSelector } from 'react-redux'

function MyWork() {
    const color = useSelector((state) => state.cart.color)

    // useState pour activer le lien
    const [active, setActive] = useState('')
    // useState pour mettre les donnes 
    const [data, setData] = useState(myWork)
    // Use state for show and hide the description of the projects
    // const [show, setShow] = useState(false)
    // useState for the hover 
    const [hover, setHover] = useState(null)


    // Fonction pour filtrer les donnes selon la category
    const filterItems = (category) => {
        if(category === 'all'){
            return setData(myWork)
        }
        // Filtrer selon la category
        const filterCategory = myWork.filter((item) => 
            item.category === category
        )

        setData(filterCategory)
    }


    // Get the value from localStorage
    useEffect(() => {
        const storedData = localStorage.getItem('active')
        if(storedData){
            setActive('all')
        }
    },[])

    // function for handle the hover of the cards
    const hoverCard = (id) => {
        const elementSpecified = data.find((item) => item.id === id)
        setHover(elementSpecified?.id)
    }
    
    return (
        <div className='contenu grid items-center justify-center gap-10'>

            <div className="title text-center flex items-center justify-center gap-3">
                <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
                <h2 className='text-2xl tracking-widest w-[200px] h-[50px] flex items-center justify-center rounded-lg' style={{border:'4px solid #006F88'}}>My Work</h2>
                <div className="point w-[10px] h-[10px] rounded-full" style={{backgroundColor:`${color}`}}></div>
            </div>

            <div className="nav grid sm:flex items-center justify-center gap-4">
                <a href="" style={{color:`${color}`}} onClick={(e) => {
                        filterItems(active)
                        e.preventDefault()
                        setActive('all')
                        window.localStorage.setItem('active', active.toString())
                    }} 
                    className={active === 'all' ? 'activer tracking-widest font-bold rounded-[20px] flex items-center justify-center h-[30px] px-[10px]' : 'font-bold tracking-widest cursor-pointer rounded-[20px] flex items-center justify-center h-[30px] px-[10px]' }>
                        All
                </a>
                <a style={{color:`${color}`}} href="" onClick={(e) => {
                        filterItems(active)
                        e.preventDefault()
                        setActive('web')
                    }} 
                    className={active === 'web' ? 'font-bold tracking-widest activer rounded-[20px] flex items-center justify-center h-[30px] px-[10px]' : 'font-bold tracking-widest cursor-pointer rounded-[20px] flex items-center justify-center h-[30px] px-[10px]' }>
                        Web
                </a>
                <a style={{color:`${color}`}} href="" onClick={(e) => {
                        filterItems(active)
                        e.preventDefault()
                        setActive('animation')
                    }} 
                    className={active === 'animation' ? 'font-bold tracking-widest activer rounded-[20px] flex items-center justify-center h-[30px] px-[10px]' : 'font-bold tracking-widest cursor-pointer rounded-[20px] flex items-center justify-center h-[30px] px-[10px]' }>
                        Animation
                </a>
                <a style={{color:`${color}`}} href="" onClick={(e) => {
                        filterItems(active)
                        e.preventDefault()
                        setActive('design')
                    }} 
                    className={active === 'design' ? 'font-bold tracking-widest activer rounded-[20px] flex items-center justify-center h-[30px] px-[10px]' : 'font-bold tracking-widest cursor-pointer rounded-[20px] flex items-center justify-center h-[30px] px-[10px]' }>
                        Design
                </a>
            </div>
            <div className="portfolio gap-3">
                {
                    data.map((item) => (
                        <motion.article
                            onMouseEnter={() => hoverCard(item.id)}
                            onMouseLeave={() => setHover(null)}
                            key={item.id} 
                            style={{border : `6px solid ${color}`,background:`url(${item.photos})`, backgroundPosition:'center', backgroundRepeat:'no-repeat', backgroundSize:'cover'}} 
                            className="overflow-hidden project grid rounded-xl w-[300px] sm:w-[400px] lg:w-[330px] items-center justify-center gap-2 h-[300px]">
                            {
                                hover === item.id ?  
                                <motion.div
                                    initial={{y : 100}}
                                    animate={{y : 20}}
                                    transition={{
                                        duration : 2,
                                        type : 'spring',
                                        stiffness : 500,
                                        ease : 'linear'
                                    }}
                                    className="info-container p-4">
                                    <h1 className='text-[24px] tracking-widest font-bold text-[#FF0400]'>{item.title}</h1>
                                    <p className='text-[#FD403D]'>
                                        {item.desc}
                                    </p>
                                    <motion.a 
                                        animate={{
                                            x : [-10, 10, 0],
                                            y : [-2, 2, 0]
                                        }}
                                        transition={{
                                            duration : 0.3,
                                            repeat : Infinity,
                                            repeatType : 'reverse',
                                            ease : 'linear'
                                        }}
                                        href=""
                                        style={{color:`#ccc`}} 
                                        className='flex font-bold gap-2 items-center bg-red-700 justify-center h-[40px] rounded-lg cursor-pointer tracking-widest'>
                                        View project
                                        <BsFillArrowRightCircleFill/>
                                    </motion.a>
                                </motion.div>
                                    :
                                    <motion.button
                                        animate={{
                                            scale:[0.8, 1.1]
                                        }}
                                        transition={{
                                            duration : 0.7,
                                            repeat:Infinity,
                                            repeatType:'reverse',
                                            ease:'linear'
                                        }}
                                        className='h-[40px] rounded-xl text-[20px] w-[200px] font-bold tracking-widest'
                                        style={{border : '3px solid #000', color:'#000'}}
                                    >
                                        Hover me
                                    </motion.button>
                            }
                            
                        </motion.article>
                    ))
                }
            </div>
        </div>
    )
}

export default MyWork