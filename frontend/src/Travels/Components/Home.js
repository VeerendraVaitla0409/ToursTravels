import React from 'react'
import mainBanner from '../assets/home.avif'
import { useNavigate } from 'react-router-dom'
import "../css/style.travels.css"

const Home = () => {

    const navigate = useNavigate();

    const handlePackageExploreClick = () => {
        navigate('/packages')
    }

    const handleServicesClick = () => {
        navigate('/services')
    }

    const handleContactUsClick = () => {
        navigate('/contact')
    }


    return (
        <div className='container p-5 '>
            <div className='row'>
                <div className=' col-lg-6 p-5'>
                    <h1 className=' display-3'>Discover Your Next Adventure!</h1>
                    <p>Explore top destinations, curated packages, and unforgettable experience with us.</p>
                    <button className=' btn btn-primary me-3' onClick={handlePackageExploreClick}>Expore Packages</button>
                    <button className=' btn btn-danger me-3' onClick={handleServicesClick}>Plan Your Trip</button>
                    <button className=' btn btn-success me-3' onClick={handleContactUsClick}>Contact Us</button>
                </div>
                <div className=' col-lg-6 p-5 text-center'>
                    <img src={mainBanner} alt='' className=' w-75 mainBanner' />
                </div>
            </div>
        </div>
    )
}

export default Home
