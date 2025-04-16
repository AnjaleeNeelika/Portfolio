import React from 'react'
import ProjectCard from '../components/ProjectCard'
import VoguePawn from '../assets/images/VoguePawn_Home.png'
import PropertyPulse from '../assets/images/PropertyPulse_Home.png'
import Levone from '../assets/images/Levone_Home.png'

const Projects = () => {
    const projectsList = [
        {
            id: 1,
            projectName: "Vogue Pawn",
            image: VoguePawn,
            description: {

            }
        }, {
            id: 2,
            projectName: "Property Pulse",
            image: PropertyPulse,
            description: {

            }
        }, {
            id: 3,
            projectName: "Levone",
            image: Levone,
            description: {

            }
        },
    ]

    return (
        <section id='projects' className='px-40 py-20'>
            <p className='w-fit text-5xl font-medium bg-gradient-to-r from-[#F806CC] via-[#D10BA2] to-[#7900B9] pb-3 text-transparent bg-clip-text'>
                Projects
            </p>

            <div className='mt-20 text-white flex justify-center gap-10 flex-wrap'>
                {projectsList.map((project, index) => (
                    <ProjectCard key={project?.id + '_' + index} {...project} />
                )) }
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects