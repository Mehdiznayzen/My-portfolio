// Importer des icons
import { BsFacebook, BsWhatsapp, BsLinkedin, BsInstagram } from 'react-icons/bs'



// Importer des photos pour les services
import uiux_img from '../assets/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg'
import webDevelopement_img from '../assets/altumcode-XMFZqrGyV-Q-unsplash.jpg'
import webDesign_img from '../assets/michael-dziedzic-qDG7XKJLKbs-unsplash.jpg'

// Importer des photos pour mon travaille
import web1_img from '../assets/georgie-cobbs-muOHbrFGEQY-unsplash.jpg'
import animation1_img from '../assets/diego-ph-fIq0tET6llw-unsplash.jpg' 
import crud_application from '../assets/crudApplication.jpg' 
import jeuHangman from '../assets/hangmanJeu.jpg'

//Importer des icones pour contact
import { BsFillArrowRightCircleFill, BsSend } from'react-icons/bs'
import { MdAttachEmail } from 'react-icons/md';

// Importer les photos du clients
import homme1 from '../assets/homme1-removebg-preview.png'
import homme2 from '../assets/homme2.png'
import femme1 from '../assets/femme1.png'
import femme2 from '../assets/femme2.png'

// The informations of the part of the navbar
export const LinksNavbar = [
    {
        id : 1,
        title : 'Home',
        link  : '/'
    },
    {
        id : 2,
        title : 'About',
        link : '#about'
    },
    {
        id : 3,
        title : 'Services',
        link : '#services'
    },
    {
        id : 4,
        title : 'My work',
        link : '#myWork'
    },
    {
        id : 5,
        title : 'Clients',
        link : '#client'
    },
    {
        id : 6,
        title : 'Contact',
        link : '#contact'
    }
]

// The informations of the part of icons socials
export const icon_social = [
    {
        id: 1,
        icon : <BsFacebook/>,
        link : 'https://web.facebook.com/?_rdc=1&_rdr'
    },
    {
        id: 2,
        icon : <BsInstagram/>,
        link : 'https://www.instagram.com'
    },
    {
        id: 3,
        icon : <BsLinkedin/>,
        link : 'https://www.linkedin.com'
    },
    {
        id: 4,
        icon : <BsWhatsapp/>,
        link : 'https://https://web.whatsapp.com'
    },
]

// The informations of the part of services
export const services = [
    {
        id : 1,
        photos : uiux_img,
        title : "UI/UX Design",
        description : `
            UI/UX design is a multidisciplinary field that combines aesthetics, psychology, and technology 
            to create digital products that are visually appealing, easy to use, and tailored to the needs
            of the intended audience. It plays a crucial role in the success of digital products by ensuring 
            that users.
        `,
        background : '#0CC4ED'
    },
    {
        id : 2,
        photos : webDevelopement_img,
        title :"Web Developement",
        description : `
            A web development project involves the creation and maintenance of a website or web application
            to achieve specific goals. This project's primary objective is to deliver an efficient, 
            user-friendly, and visually appealing web platform that meets the needs of its target audience.
        `,
        background : '#C8F31C' 
    },
    {
        id : 3,
        photos : webDesign_img,
        title:"Website Design & Development",
        description : `
            A web design project involves the creation and optimization of the visual and interactive elements of 
            a website. This includes the layout, color scheme, typography, images, icons, and user interface components.
            The primary goal of web design is to deliver an engaging, user-friendly.
        `,
        background : '#FF6214'
    }
]

// The informations of the part of my works

export const myWork = [
    {
        id : 1,
        photos : web1_img,
        title : 'Cocktails with react',
        desc : 'Cocktails with React is an exciting and user-friendly website dedicated to the world of cocktails and refreshing drinks.',
        category : 'web'
    },
    {
        id : 2,
        photos : crud_application,
        title : 'Crud Application',
        desc : 'My CRUD application developed with React is a friendly user interface that allows users to easily manage their data. Through this application, users can create new records by filling out forms.',
        category : 'design'
    },
    {
        id : 3,
        photos : animation1_img,
        title : 'Animations with framer motion',
        desc : "A web animation project with HTML, CSS, and JavaScript is a great way to create interactive and engaging experiences for users on the web.",
        category : 'animation'
    },
    {
        id : 4,
        photos : jeuHangman,
        title : 'Game Hangman with Javascript',
        desc : "A web animation project with HTML, CSS, and JavaScript is a great way to create interactive and engaging experiences for users on the web.",
        category : 'animation'
    },
]

// The informations of the part of contacts
export const contact = [
    {
        id : 1,
        icon : <MdAttachEmail/>,
        title : 'Email',
        compte : 'mehdiznayzen@gmail.com',
    },
    {
        id : 2,
        icon : <BsWhatsapp/>,
        title : 'Whatsapp',
        compte : 'https://www.whatsapp.com',
    },
    {
        id : 3,
        icon : <BsLinkedin/>,
        title : 'Linkedin',
        compte : 'https://www.linkedin.com',
    },
]

// The informations of the part of client
export const client = [
    {
        id : 1,
        profile : homme2,
        name : 'Leanardo Mehdi',
        info : 'A really good job, all aspects of the project were followed step by step and with good results'
    },
    {
        id : 2,
        profile : femme1,
        name : 'Sara Cill',
        info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aperiam pariatur cumque doloribus! Odio autem eos quidem!'
    },
    {
        id : 3,
        profile : femme2,
        name : 'Imane Znayzen',
        info : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus odio iusto fugiat explicabo expedita laudantium cupiditate perfe.'
    },
]