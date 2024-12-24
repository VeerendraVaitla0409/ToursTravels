import React from 'react'
import NoPageImg from '../assets/404.gif'

const NoPage = () => {
    return (
        <div className='container p-5 text-center'>
            <img src={NoPageImg} alt='NoPage' className='w-50' />
        </div>
    )
}

export default NoPage
