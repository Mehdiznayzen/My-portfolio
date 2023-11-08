import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import './scrollStyle.css'

function ScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)
    
    const dispatch = useDispatch()
    const color = useSelector((state) => state.cart.color)

    const handleProgress = () => {
        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        let scrollTop = document.documentElement.scrollTop

        const progress = (scrollTop / height) * 100
        setScrollProgress(progress)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleProgress)
    }, [])

    return (
        <div className='scroller' style={{width:`${scrollProgress}%`, background:`${color}`}}></div>
    )
}

export default ScrollProgress