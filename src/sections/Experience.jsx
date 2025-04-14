import React from 'react'

const Experience = () => {
  return (
    <section id='experience' className='px-40 py-20'>
        <p className='w-fit text-5xl font-medium bg-gradient-to-r from-[#F806CC] via-[#D10BA2] to-[#7900B9] pb-3 text-transparent bg-clip-text'>
            Experience
        </p>
        <p className='text-white text-xl mt-2 font-medium'>Professional Background</p>

        <div className={`mt-20 text-white flex justify-center bg-[url('/Background-Experience.png')] bg-left bg-no-repeat bg-contain`}>
            {/* <div className='flex'>
                <div className='text-2xl font-semibold'>Research Assistant</div>
            </div> */}
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody className='align-text-top'>
                    <tr>
                        <td>
                            <p className='text-right text-2xl font-semibold'>Research Assistant</p>
                            <p className='text-right text-xl italic mt-3'>University of Colombo School of Computing</p>
                        </td>
                        <td>
                            <div className='w-3 h-3 bg-white rounded-full mx-20'></div>
                        </td>
                        <td>
                            <p className='text-xl font-semibold'>September 2024 - March 2025</p>
                            <p className='w-full max-w-[800px] text-xl leading-relaxed text-justify mt-4'>
                                As a Research Assistant, I participated in a project where we developed a system to estimate and
                                analyse human poses using multiple camera view from different angles and creating a 3D representation 
                                of the poses. Furthermore, for analysing poses we created functions for calculating joint angles in a 
                                specific body keypoint using keypoint coordinates and generating graphs for comparing. We used Python 
                                and YOLOv7 pose estimation model for the development.
                            </p>
                        </td>
                    </tr>

                    <tr>
                        <td className='pt-20'>
                            <p className='text-right text-2xl font-semibold'>Software Engineering Intern</p>
                            <p className='text-right text-xl italic mt-3'>Modelling & Simulation Group</p>
                            <p className='text-right text-xl italic mt-3'>University of Colombo School of Computing</p>
                        </td>
                        <td>
                            <div className='w-3 h-3 bg-white rounded-full mx-20'></div>
                        </td>
                        <td>
                            <p className='text-xl font-semibold'>January 2024 - July 2024</p>
                            <p className='w-full max-w-[800px] text-xl leading-relaxed text-justify mt-4'>
                                As a Research Assistant, I participated in a project where we developed a system to estimate and
                                analyse human poses using multiple camera view from different angles and creating a 3D representation 
                                of the poses. Furthermore, for analysing poses we created functions for calculating joint angles in a 
                                specific body keypoint using keypoint coordinates and generating graphs for comparing. We used Python 
                                and YOLOv7 pose estimation model for the development.
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default Experience