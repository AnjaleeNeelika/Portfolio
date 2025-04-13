import React from 'react'
import ProfileImage from '../assets/images/my_image.jpg'

const AboutMe = () => {
    return (
        <section id='about-me' className='px-40 py-20'>
            <p className='w-fit text-5xl font-medium bg-gradient-to-r from-[#F806CC] via-[#D10BA2] to-[#7900B9] pb-3 text-transparent bg-clip-text'>
                About Me
            </p>

            <div className='mt-10 flex items-center justify-center gap-50'>
                <div className='p-1 w-fit h-fit rounded-full bg-gradient-to-br from-[#F806CC] via-[#920478] to-[#7900B9] shadow-2xl shadow-[#7900B9]'>
                    <img src={ProfileImage} alt='profile-image' className='w-75 h-75 bg-cover rounded-full' />
                </div>
                <div className={`w-[800px] text-white text-xl/relaxed text-justify flex flex-col gap-5 bg-[url('/Background-AboutMe.png')] bg-center bg-no-repeat bg-contain`}>
                    <p>
                        I'm a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies. 
                        I enjoy building complete web solutions — from designing responsive user interfaces, to developing powerful 
                        server-side logic various technologies, and efficient database management with both SQL and NoSQL databases.
                    </p>
                    <p> 
                        I thrive on problem-solving, learning new tools and technologies, and bringing creative ideas to life through 
                        clean, maintainable code. Whether it's developing APIs, managing databases, or crafting smooth and interactive 
                        user experiences, I love working across the full stack to deliver high-quality results.
                    </p>
                    <p>
                        I'm always eager to collaborate on exciting projects, contribute to innovative solutions, and continue growing 
                        as a developer. Outside of coding, I enjoy exploring new tech trends, improving my design sense, and contributing 
                        to open-source communities.
                    </p>
                    <p>
                        Let’s connect and build something extraordinary!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe