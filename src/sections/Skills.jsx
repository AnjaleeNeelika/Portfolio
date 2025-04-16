import React from 'react'
import JavaIcon from '../assets/icons/java.png'
import PythonIcon from '../assets/icons/python.png'
import JSIcon from '../assets/icons/js.png'
import CIcon from '../assets/icons/c.png'
import CPPIcon from '../assets/icons/cpp.png'
import PHPIcon from '../assets/icons/php.png'
import HTMLIcon from '../assets/icons/html.png'
import CSSIcon from '../assets/icons/css.png'
import ReactIcon from '../assets/icons/reactjs.png'
import TailwindIcon from '../assets/icons/tailwindcss.png'
import SpringBootIcon from '../assets/icons/springboot.png'
import FlaskIcon from '../assets/icons/flask.png'
import MySQLIcon from '../assets/icons/mysql.png'
import PostgreIcon from '../assets/icons/postgresql.png'
import MongoIcon from '../assets/icons/mongodb.png'
import VSCodeIcon from '../assets/icons/vscode.png'
import IntelliJIcon from '../assets/icons/intellij.png'
import PyCharmIcon from '../assets/icons/pycharm.png'
import PostmanIcon from '../assets/icons/postman.png'
import GitIcon from '../assets/icons/git.png'
import GithubIcon from '../assets/icons/github.png'
import FigmaIcon from '../assets/icons/figma.png'
import CanvaIcon from '../assets/icons/canva.png'
import SkillCard from '../components/SkillCard'

const Skills = () => {
    const skillsList = {
        "programmingLanguages": [
            {
                id: 1,
                skill: 'Java',
                icon: JavaIcon
            }, {
                id: 2,
                skill: 'Python',
                icon: PythonIcon
            }, {
                id: 3,
                skill: 'JavaScript',
                icon: JSIcon
            }, {
                id: 4,
                skill: 'C',
                icon: CIcon
            }, {
                id: 5,
                skill: 'C++',
                icon: CPPIcon
            }, {
                id: 6,
                skill: 'PHP',
                icon: PHPIcon
            }
        ],
        "frontendDevelopment": [
            {
                id: 7,
                skill: 'HTML',
                icon: HTMLIcon
            }, {
                id: 8,
                skill: 'CSS',
                icon: CSSIcon
            }, {
                id: 9,
                skill: 'React JS',
                icon: ReactIcon
            }, {
                id: 10,
                skill: 'Tailwind CSS',
                icon: TailwindIcon
            }
        ], 
        "backendDevelopment": [
            {
                id: 11,
                skill: 'Spring Boot',
                icon: SpringBootIcon
            }, {
                id: 12,
                skill: 'Flask',
                icon: FlaskIcon
            }
        ],
        "databases": [
            {
                id: 13,
                skill: 'MySQL',
                icon: MySQLIcon
            }, {
                id: 14,
                skill: 'PostgreSQL',
                icon: PostgreIcon
            }, {
                id: 15,
                skill: 'MongoDB',
                icon: MongoIcon
            }
        ],
        "IDEsAndTools": [
            {
                id: 14,
                skill: 'VS Code',
                icon: VSCodeIcon
            }, {
                id: 15,
                skill: 'IntelliJ IDEA',
                icon: IntelliJIcon
            }, {
                id: 16,
                skill: 'PyCharm',
                icon: PyCharmIcon
            }, {
                id: 17,
                skill: 'Postman',
                icon: PostmanIcon
            }, {
                id: 18,
                skill: 'Git',
                icon: GitIcon
            }, {
                id: 19,
                skill: 'GitHub',
                icon: GithubIcon
            }, {
                id: 20,
                skill: 'Figma',
                icon: FigmaIcon
            }, {
                id: 21,
                skill: 'Canva',
                icon: CanvaIcon
            }
        ]
    }

    return (
        <section id='skills' className='px-40 py-20'>
            <p className='w-fit text-5xl font-medium bg-gradient-to-r from-[#F806CC] via-[#D10BA2] to-[#7900B9] pb-3 text-transparent bg-clip-text'>
                Skills
            </p>

            <div className='mt-20 text-white flex justify-center gap-10 flex-wrap'>
                <div className='w-fit px-10 py-8 rounded-lg border-2 border-[#7900B9] shadow-2xl/50 shadow-[#C970F8] hover:scale-110 transition-all duration-500 cursor-auto'>
                    <p className='text-2xl text-[#7900B9] font-medium text-center'>Programming Languages</p>

                    <div className='flex gap-2 flex-wrap mt-10 w-fit mx-auto'>
                        {skillsList.programmingLanguages?.map((skill, index) => (
                            <SkillCard key={skill?.id+"_"+index} {...skill} />
                        ))}
                    </div>
                </div>

                <div className='w-fit px-10 py-8 rounded-lg border-2 border-[#B803C3] shadow-2xl/50 shadow-[#B903C2] hover:scale-110 transition-all duration-500 cursor-auto'>
                    <p className='text-2xl text-[#EC02F9] font-medium text-center'>Frontend Development</p>

                    <div className='flex gap-2 flex-wrap mt-10 w-fit mx-auto'>
                        {skillsList.frontendDevelopment?.map((skill, index) => (
                            <SkillCard key={skill?.id+"_"+index} {...skill} />
                        ))}
                    </div>
                </div>

                <div className='w-fit px-10 py-8 rounded-lg border-2 border-[#959BFF] shadow-2xl/50 shadow-[#959BFF] hover:scale-110 transition-all duration-500 cursor-auto'>
                    <p className='text-2xl text-[#959BFF] font-medium text-center'>Backend Development</p>

                    <div className='flex gap-2 flex-wrap mt-10 w-fit mx-auto'>
                        {skillsList.backendDevelopment?.map((skill, index) => (
                            <SkillCard key={skill?.id+"_"+index} {...skill} />
                        ))}
                    </div>
                </div>

                <div className='w-fit px-10 py-8 rounded-lg border-2 border-[#8A59CE] shadow-2xl/50 shadow-[#8A59CE] hover:scale-110 transition-all duration-500 cursor-auto'>
                    <p className='text-2xl text-[#8A59CE] font-medium text-center'>Database Management</p>

                    <div className='flex gap-2 flex-wrap mt-10 w-fit mx-auto'>
                        {skillsList.databases?.map((skill, index) => (
                            <SkillCard key={skill?.id+"_"+index} {...skill} />
                        ))}
                    </div>
                </div>

                <div className='w-fit px-10 py-8 rounded-lg border-2 border-[#FEC9F1] shadow-2xl/50 shadow-[#FEC9F1] hover:scale-110 transition-all duration-500 cursor-auto'>
                    <p className='text-2xl text-[#FEC9F1] font-medium text-center'>Tools & IDEs</p>

                    <div className='flex gap-2 flex-wrap mt-10 w-fit mx-auto'>
                        {skillsList.IDEsAndTools?.map((skill, index) => (
                            <SkillCard key={skill?.id+"_"+index} {...skill} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills