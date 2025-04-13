import React from 'react'
import Navbar from '../components/Navbar'
import HeroBackground from '../assets/images/Background-Hero.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from 'react-router';
import MyResume from '../assets/documents/AnjaleeNeelika_CV.pdf'
 
const Hero = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <div className={`bg-[url('/Background-Hero.png')] bg-right bg-no-repeat bg-contain`}>
                <div 
                    className='px-40 py-40'
                    // style={{
                    //     backgroundImage: "url('/Background-Hero.png')"
                    // }}
                >
                    <p className='w-fit text-6xl font-medium bg-gradient-to-r from-[#F806CC] via-[#D10BA2] to-[#7900B9] pb-3 text-transparent bg-clip-text'>
                        Hi! I'm Anjalee...
                    </p>
                    <div className='text-white mt-20 text-4xl font-semibold flex gap-5'>
                        <span>
                            Full Stack Developer
                        </span>
                        <span>
                            | 
                        </span>
                        <span> 
                            Turning ideas into scalable and responsive web applications
                        </span>
                    </div>
                    <div className='text-3xl text-white mt-6'>
                        Crafting seamless user experiences and robust backend systems
                    </div>
                    <div className='mt-15 text-4xl text-white flex gap-5 hover:shadow-lg'>
                        <a
                            href='https://github.com/AnjaleeNeelika'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <FaGithub className='rounded-full hover:shadow-xl shadow-[#636363] hover:scale-125 duration-200' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/anjalee99'
                            target='_blank'
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin className='rounded-sm hover:shadow-xl shadow-[#636363] hover:scale-125 duration-200' />
                        </a>
                        {/* <a
                            href='anjaleeneelika20@gmail.com'
                            target='_blank'
                        >
                            <IoMdMail />
                        </a> */}
                    </div>
                    <div className='mt-20 w-fit rounded-full p-0.5 bg-gradient-to-br from-[#F806CC] via-[#920478] to-[#7900B9] flex items-center justify-center hover:-translate-y-1 transition-all duration-300'>
                        <a href={MyResume} download='Anjalee_Neelika_CV.pdf' className='bg-[#070f2b] text-white py-4 px-10 rounded-full shadow-2xl/100 shadow-[#7900B9] hover:bg-gradient-to-br from-[#F806CC] via-[#920478] to-[#7900B9] cursor-pointer'>Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero