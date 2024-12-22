import React from 'react'
import aboutImg from '../assets/about.avif'
import "../css/style.travels.css"
import { Link } from 'react-router-dom'
import team1 from '../assets/team/team1.avif'
import team2 from '../assets/team/team2.avif'
import team3 from '../assets/team/team3.avif'
import team4 from '../assets/team/team4.avif'

const About = () => {
    return (
        <div>
            <section class="bg-dark text-white text-center py-5">
                <div class='container'>
                    <h1 class="display-4">Who We Are</h1>
                    <p class="lead">Your Trusted Travel Partner</p>
                </div>
            </section>

            <section class="py-5">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h2>Our Journey</h2>
                            <p>We started ur journey with a simple yet powerful mission: to make travel hassle-free and unforgettable.
                                Over the years, we've grown into a trusted travel partner for countless explorers, offering curated experiences and exceptional services
                            </p>
                        </div>
                        <div class="col-md-6 text-center">
                            <img src={aboutImg} class='w-50 mx-auto rounded aboutImg' alt='Our Journey' />
                        </div>
                    </div>
                </div>
            </section>
            <section class='bg-light py-5'>
                <div class='container text-center'>
                    <h2>Our Mission & Vision</h2>
                    <p class='mt-3'><strong>Mission:</strong> To provide hassle-free, personalized travel</p>
                    <p><strong>Vision:</strong> To be a leading travel service provider known for excellent</p>
                </div>
            </section>

            <section class=' py-5'>
                <div class='container'>
                    <h2 class='text-center'>Why Travel With Us?</h2>
                    <div class='row mt-4'>
                        <div class='col-md-4'>
                            <div class='text-center p-3 border rounded'>
                                <i class='bi bi-award-fill display-4 text-primary'></i>
                                <h4 class='mt-3'>Expert Travel Experts</h4>
                                <p>Our team ensures your journey is seamless and memorable.</p>
                            </div>
                        </div>
                        <div class='col-md-4'>
                            <div class='text-center p-3 border rounded'>
                                <i class='bi bi-wallet2 display-4 text-success'></i>
                                <h4 class='mt-3'>Affordable Pricing</h4>
                                <p>Get the best value for your money with our transparent pricing.</p>
                            </div>
                        </div>
                        <div class='col-md-4'>
                            <div class='text-center p-3 border rounded'>
                                <i class='bi bi-headset display-4 text-warning'></i>
                                <h4 class='mt-3'>24/7 Support</h4>
                                <p>Our support team is here to assist you anytime, anywhere.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class='bg-light py-5'>
                <div class='container'>
                    <h2 class='text-center'>Meet the Team</h2>
                    <div class='row mt-4'>
                        <div class='col-md-3 text-center'>
                            <img src={team1} class='img-fluid rounded-circle team-member' alt='Team Member' />
                            <h5 class='mt-2'>John Doe</h5>
                            <p>Founder & CEO</p>
                        </div>
                        <div class='col-md-3 text-center'>
                            <img src={team2} class='img-fluid rounded-circle team-member' alt='Team Member' />
                            <h5 class='mt-2'>Jane Smith</h5>
                            <p>Travel Consultant</p>
                        </div>
                        <div class='col-md-3 text-center'>
                            <img src={team3} class='img-fluid rounded-circle team-member' alt='Team Member' />
                            <h5 class='mt-2'>Michael Brown</h5>
                            <p>Operations Manager</p>
                        </div>
                        <div class='col-md-3 text-center'>
                            <img src={team4} class='img-fluid rounded-circle team-member' alt='Team Member' />
                            <h5 class='mt-2'>Emily Devis</h5>
                            <p>Marketing Head</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class='text-center bg-primary text-white py-5'>
                <div class='container'>
                    <h2>Ready to Plan Your Next Adventure?</h2>
                    <p class='mt-3'>Explore our curated travel packages and make your dreams a reality</p>
                    <Link to='/packages' class='btn btn-light btn-lg'>Explore Packages</Link>
                </div>
            </section>


        </div>
    )
}

export default About
