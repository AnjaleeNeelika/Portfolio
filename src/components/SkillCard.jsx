import React from 'react'

const SkillCard = ( props ) => {
    return (
        <div className='flex flex-col justify-center items-center border py-2 px-2 rounded-lg text-center'>
            <img src={props.icon} alt="" className='align-center w-8' />
            {/* <p className='text-xs align-bottom'>{props.skill}</p> */}
        </div>
    )
}

export default SkillCard