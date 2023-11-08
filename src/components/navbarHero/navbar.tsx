import React, { useState, useEffect } from 'react'
import { LinksNavbar } from '../../data/data'
import { FaBarsStaggered } from 'react-icons/fa6'
import { AiFillCloseCircle } from 'react-icons/ai'
import '../../constants/home/homeStyle.css'
import SideBar from './sideBar'
import { FaRegMoon } from 'react-icons/fa6'
import { FiSun } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { actions } from '../../store/createSlice'

// variant for the navbar
const  variantNavbar = {
    initial : {
        y : -250
    }, 
    animate : {
        y : 0,
        transition : {
            delay : 0.1,
            type : 'spring',
            stiffness : 350
        }
    }
    
}


function Navbar() {
    const [openNavbar, setOpenNavbar] = useState(false)
    const [bgNav, setbgNav] = useState('')

    const dispatch = useDispatch()
    const {darkMode, color} = useSelector((state) => state.cart)
    
    const handleDarkMode = () => {
        dispatch(actions.handleDarkMode())
    }

    // Fonction pour ajouter une plan-arriere dans la navbar
    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (window.scrollY / scrollHeight) * 100;
    
        if (scrollPercentage >= 4) {
            setbgNav('#2388BF')
        }else{
            setbgNav('')
        }
    };

    
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.nav
            variants={variantNavbar}
            initial='initial'
            animate='animate'
            className="navbar rounded-xl flex items-center justify-between px-6 md:px-20 py-6 fixed w-full" 
            style={{zIndex:1, background:`${bgNav}`}}>
            <div className="logo-nav">
                <a href="/" className='font-bold flex items-baseline gap-1 text-2xl sm:text-4xl tracking-widest'>
                    <span className='text-3xl lg:text-5xl' style={{color:`${color}`}}>M</span>
                    <div className="w-[15px] h-[15px] rounded-full" style={{background:`${color}`}}></div>
                </a>
            </div>
            <ul className="navbar-nav hidden lg:flex items-center gap-9">
                {
                    LinksNavbar.map((item) => (
                        <li key={item.id}>
                            <a href={item.link} style={{color:`${color}`}} className='tracking-widest text-md font-semibold'>{item.title}</a>
                        </li>
                    ))
                }
                <li style={{color:`${color}`, border:`4px solid ${color}`}} className='cursor-pointer text-2xl p-[4px] rounded-full' onClick={handleDarkMode}>
                    {
                        !darkMode ? <FaRegMoon/> : <FiSun/>
                    }
                </li>
            </ul>
            <div className="nav-toggle block text-gray-700 lg:hidden text-3xl cursor-pointer" onClick={() => setOpenNavbar(!openNavbar)}>
                {
                    !openNavbar ?  <FaBarsStaggered/> : <AiFillCloseCircle/>
                }
            </div>
            { 
            openNavbar && 
                <motion.div     
                    initial = {{
                        x : '100vw'
                    }}
                    animate = {{
                        x : 0
                    }}
                    transition={{
                        duration: .4 , type:'tween'
                    }}
                    className="responsive-navbar absolute right-10 top-14 p-14 rounded-xl" style={{background : '#7C7B7A', zIndex:'1'}}>
                    <SideBar/>
                </motion.div>
            }
        </motion.nav>
    )
}

export default Navbar