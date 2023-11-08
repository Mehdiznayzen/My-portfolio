import React from 'react'
import { LinksNavbar } from '../../data/data'

function SideBar() {
    return (
        <ul className="navbar-nav grid items-center justify-center gap-7">
            {
                LinksNavbar.map((item) => (
                    <li key={item.id}>
                        <a href={item.link} className='tracking-widest hover:text-black font-semibold' style={{color : '#000'}}>{item.title}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default SideBar