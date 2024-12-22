import React from 'react'
import { Link } from 'react-router-dom'
import service1 from '../assets/services/service1.avif'
import service2 from '../assets/services/service2.avif'
import service3 from '../assets/services/service3.avif'
import service4 from '../assets/services/service4.avif'
import service5 from '../assets/services/service5.avif'
import service6 from '../assets/services/service6.avif'

const Services = () => {

    const serviceList =
        [
            {
                "id": 1,
                "name": "Tour Packages",
                "description": "Our custom travel packages are designed to meet the interests of every traveler. From luxury to budget tours, explore the world with us.",
                "image": { service1 },
                "cta_text": "Discover More",
                "cta_link": "#tour-packages"
            },
            {
                "id": 2,
                "name": "Hotel Booking",
                "description": "From 5-star luxury stays to affordable options, we help you book the perfect hotel for your next vacation.",
                "image": { service2 },
                "cta_text": "Book Now",
                "cta_link": "#hotel-booking"
            },
            {
                "id": 3,
                "name": "Car Rentals",
                "description": "Rent a car from our wide range of vehicles and explore your destination at your own pace. Convenient and affordable options.",
                "image": { service3 },
                "cta_text": "Rent a Car",
                "cta_link": "#car-rentals"
            },
            {
                "id": 4,
                "name": "Guided Tours",
                "description": "Join our expert guides for a personalized and immersive travel experience. Learn about the culture, history, and hidden gems.",
                "image": { service4 },
                "cta_text": "Join a Tour",
                "cta_link": "#guided-tours"
            },
            {
                "id": 5,
                "name": "Flight Booking",
                "description": "We help you find the best flight deals to your favorite destinations. Fast, easy, and reliable flight booking system.",
                "image": { service5 },
                "cta_text": "Book a Flight",
                "cta_link": "#flight-booking"
            },
            {
                "id": 6,
                "name": "Travel Insurance",
                "description": "Secure your travel with our affordable insurance plans. Be covered for unexpected events during your journey.",
                "image": { service6 },
                "cta_text": "Get Covered",
                "cta_link": "#travel-insurance"
            }
        ]


    return (
        <div>
            <section class="services py-5">
                <div class="container">
                    <div class="row text-center mb-5">
                        <div class="col-12">
                            <h2 class="display-4">Our Services</h2>
                            <p class="lead text-muted">Explore the amazing services we offer to make your travel unforgettable.</p>
                        </div>
                    </div>
                    <div class='row g-4'>
                        {
                            serviceList.map((service) => {
                                return (
                                    <div class="col-md-4">
                                        <div class="card service-card">
                                            <img src={service.image} class="card-img-top service-image" alt="Tour Packages" style={{ height: "200px" }} />
                                            <div class="card-body">
                                                <h5 class="card-title service-title">{service.name}</h5>
                                                <p class="card-text service-description">{service.description}</p>
                                                <Link to="#" class="btn btn-primary">{service.cta_text}</Link>
                                            </div>
                                        </div>
                                    </div>)
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
