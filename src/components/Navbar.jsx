import React from 'react'
import NameSignature from '../assets/images/name_signature.png'
import { Link, NavLink } from 'react-router'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
    return (
        <div className='w-full flex justify-between items-center p-10 gap-10'>
            <div className='div-signature'>
                <img src={NameSignature} alt='signature' className='h-7 md:h-10' />
            </div>

            <nav className='text-white font-medium flex flex-wrap gap-20 uppercase'>
                <HashLink
                    smooth
                    to='/#about-me'
                >
                    About Me
                </HashLink>
                <HashLink
                    smooth
                    to='/#experience'
                >
                    Experience
                </HashLink>
                <HashLink
                    smooth
                    to='/#education'
                >
                    Education
                </HashLink>
                <HashLink
                    smooth
                    to='/#skills'
                >
                    Skills
                </HashLink>
                <HashLink
                    smooth
                    to='/#projects'
                >
                    Projects
                </HashLink>
                <HashLink
                    smooth
                    to='/#contact'
                >
                    Contact Me
                </HashLink>
            </nav>
        </div>
    )
}

export default Navbar