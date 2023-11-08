import React, { useEffect, useState } from 'react'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux/es/exports';

function ScrollTop() {
    const [visible, setVisible] = useState(false)
    const { color } = useSelector((state) => state.cart)

    // Function hide and show the opacity of the button
    const handleOpacity = () => {

        let btn = document.getElementById('btn-scroll')

        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollPourcentage = (window.scrollY / scrollHeight) * 100
        
        if(scrollPourcentage >= 10){
            setVisible(true)
        }else {
            setVisible(false)
        }
        
    }

    const handleScrollTop = () => {
        window.scrollTo({top:0, behavior:'smooth'})
    }

    useEffect(() => {
        window.addEventListener('scroll', handleOpacity)
    }, [])

    return (
        <motion.button 
            animate={{
                scale:[0.5, 0.9]
            }}
            transition={{
                duration : 0.7,
                repeat:Infinity,
                repeatType:'reverse',
                ease:'linear'
            }}
            onClick={handleScrollTop} 
            className={`bg-[#006F88] text-3xl p-3 rounded-xl fixed bottom-[30px] right-[30px] 
            ${visible ? 'visible' : 'hidden'}`} 
            style={{zIndex:'1',color:`${color}`}}
        >
            <BsFillArrowUpCircleFill />
        </motion.button>
    )
}

export default ScrollTop