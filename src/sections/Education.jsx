import React from 'react'

const Education = () => {
  return (
    <section id='education' className='px-40 py-20'>
        <p className='w-fit text-5xl font-medium bg-gradient-to-r from-[#F806CC] via-[#D10BA2] to-[#7900B9] pb-3 text-transparent bg-clip-text'>
            Education
        </p>

        <p className='text-white text-xl mt-2'>Academic Background</p>

        <div className={`mt-20 text-white flex justify-center bg-[url('/Background-Education.png')] bg-center bg-no-repeat bg-contain`}>
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
                            <p className='text-right text-2xl font-semibold'>University of Colombo School of Computing</p>
                            <p className='text-right text-xl italic mt-3'>BSc. in Computer Science</p>
                        </td>
                        <td>
                            <div className='w-3 h-3 bg-white rounded-full mx-20'></div>
                        </td>
                        <td>
                            <p className='text-xl font-semibold'>2021 - 2024</p>
                            <div className='w-full max-w-[800px] text-xl leading-relaxed text-justify mt-4'>
                                <p>Relevant Coursework :</p>
                                <p className='mt-2'>Data Structures & Algorithms, Database Management, Software Engineering, Object Oriented Programming</p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className='pt-20'>
                            <p className='text-right text-2xl font-semibold'>ESOFT Metro Campus, Kurunegala</p>
                            <p className='text-right text-xl italic mt-3'>Diploama in Software Engineering</p>
                            <p className='text-right text-xl italic mt-3'>Diploma in Information Technology</p>
                        </td>
                        <td>
                            <div className='w-3 h-3 bg-white rounded-full mx-20'></div>
                        </td>
                        <td>
                            <p className='text-xl font-semibold'>2020 - 2021</p>
                            <div className='w-full max-w-[800px] text-xl leading-relaxed text-justify mt-4'>
                                <p>Relevant Coursework :</p>
                                <p className='mt-2'>Photoshop, C#, Python, Computer Networking</p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className='pt-20'>
                            <p className='text-right text-2xl font-semibold'>Maliyadeva Balika Vidyalaya, Kurunegala</p>
                            <p className='text-right text-xl italic mt-3'>G.C.E. Advanced Level (Physical Sciences) - 2019</p>
                            <p className='text-right text-xl italic mt-3'>G.C.E. Ordinary Level - 2015</p>
                        </td>
                        <td>
                            <div className='w-3 h-3 bg-white rounded-full mx-20'></div>
                        </td>
                        <td>
                            <p className='text-xl font-semibold'>2010 - 2019</p>
                            <div className='w-full max-w-[800px] text-xl leading-relaxed text-justify mt-4'>
                                <p>Extracurricular Activities :</p>
                                <p className='mt-2'>Member of the Girl Guides' Association, Music Troupe Member of a Drama Club, Chess Player, Violinist</p>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className='pt-20'>
                            <p className='text-right text-2xl font-semibold'>St. Bernadette's College, Polgahawela</p>
                            <p className='text-right text-xl italic mt-3'>Primary Education</p>
                        </td>
                        <td>
                            <div className='w-3 h-3 bg-white rounded-full mx-20'></div>
                        </td>
                        <td>
                            <p className='text-xl font-semibold'>2004 - 2010</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  )
}

export default Education