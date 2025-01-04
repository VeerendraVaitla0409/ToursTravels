import React from 'react'
import { Link } from 'react-router-dom'
import package1 from '../assets/packages/package1.avif'
import package2 from '../assets/packages/package2.avif'
import package3 from '../assets/packages/package3.avif'
import package4 from '../assets/packages/package4.avif'
import package5 from '../assets/packages/package5.avif'
import package6 from '../assets/packages/package6.avif'


const Packages = () => {

    const packageList = [
        {
            "id": 1,
            "name": "Golden Triangle Tour",
            "description": "Explore the historical gems of Delhi, Agra, and Jaipur in this iconic tour.",
            "duration": "6 Days, 5 Nights",
            "price": 57000,
            "currency": "INR",
            "image": package1,
            "details_url": "https://example.com/packages/golden-triangle-tour"
        },
        {
            "id": 2,
            "name": "Kerala Backwaters Escape",
            "description": "Relax in the serene backwaters and lush green landscapes of Kerala.",
            "duration": "5 Days, 4 Nights",
            "price": 41000,
            "currency": "INR",
            "image": package2,
            "details_url": "https://example.com/packages/kerala-backwaters-escape"
        },
        {
            "id": 3,
            "name": "Rajasthan Royal Heritage",
            "description": "Experience the regal charm of Rajasthan with visits to Jaipur, Udaipur, and Jodhpur.",
            "duration": "7 Days, 6 Nights",
            "price": 73000,
            "currency": "INR",
            "image": package3,
            "details_url": "https://example.com/packages/rajasthan-royal-heritage"
        },
        {
            "id": 4,
            "name": "Goa Beach Getaway",
            "description": "Unwind on the sun-kissed beaches and enjoy the vibrant nightlife of Goa.",
            "duration": "4 Days, 3 Nights",
            "price": 32000,
            "currency": "INR",
            "image": package4,
            "details_url": "https://example.com/packages/goa-beach-getaway"
        },
        {
            "id": 5,
            "name": "Himalayan Adventure",
            "description": "Embark on a thrilling journey through the breathtaking landscapes of Himachal Pradesh.",
            "duration": "8 Days, 7 Nights",
            "price": 64000,
            "currency": "INR",
            "image": package5,
            "details_url": "https://example.com/packages/himalayan-adventure"
        },
        {
            "id": 6,
            "name": "Spiritual Varanasi Tour",
            "description": "Immerse yourself in the spiritual aura of Varanasi and the Ganges River.",
            "duration": "3 Days, 2 Nights",
            "price": 24000,
            "currency": "INR",
            "image":package6,
            "details_url": "https://example.com/packages/spiritual-varanasi-tour"
        }
    ]

    return (
        <div>
            <section class='bg-dark text-white text-center py-5'>
                <div class='container'>
                    <h1 class='display-4'>Explore our Travel Packages</h1>
                    <p class='lead'>Handpicked destinations for every traveler. Find your perfect getaway!</p>
                </div>
            </section>

            <section class='py-5'>
                <div class='container'>
                    <h2 class='text-center mb-4'>Our Featured Packages</h2>
                    <div class='row g-4'>
                        {
                            packageList.map((tour) => {
                                return (
                                    <div class='col-md-4'>
                                        <div class='card h-100' style={{ width: "350px", height: "200px" }}>
                                            <img src={tour.image} class='card-img-top' alt={tour.name}
                                                style={{ width: "350px", height: "200px", objectFit: "cover" }} />
                                            <div class='card-body'>
                                                <h5 class='card-title'>{tour.name}</h5>
                                                <p class='card-text'>{tour.description}</p>
                                                <ul class='list-group list-group-flush'>
                                                    <li class='list-group-item'>Duration: {tour.duration}</li>
                                                    <li class='list-group-item'>Price: ₹{tour.price} per Person </li>
                                                </ul>
                                            </div>
                                            <div class='card-footer text-center'>
                                                <Link to='#' class='btn btn-primary'>View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Packages
