import React, { useRef, useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
// import './styles.css'
const Navbar = () => {
    const list = useRef(null);
    const [show,setShow] = useState(false)
    const onClick = () => {
        setShow(!show)
        if(show){
            // list.current.style.transform = 'translateX(0%)'
            list.current.style.transform = 'scale(1)'
        }else{
            // list.current.style.transform = 'translateX(-100%)'
            list.current.style.transform ='scale(0)'

        }
    }
  return (
    <>
        <nav>
            <div className="nav-brand">
                <img style={{
                    width:'50px'
                }} src="https://www.thebrandingjournal.com/wp-content/uploads/2019/05/chanel_logo_the_branding_journal.jpg" alt="" />
            <GiHamburgerMenu className='menu' onClick={onClick}/>

            </div>
            <ul ref={list}>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <button>
                Sign Up
            </button>
        </nav>
        <div className="my-div">

        </div>
    </>
  )
}

export default Navbar