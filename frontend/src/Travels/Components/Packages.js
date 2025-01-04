import axios from 'axios';
import React, { Component } from 'react'
import { ENDPOINTS } from '../constants/urls';
import { NavLink } from 'react-router-dom';

export default class Packages extends Component {

    constructor() {
        super();
        this.state = {
            packageList: []
        }
    }

    componentDidMount(){
        axios.get(ENDPOINTS.GET_PACKAGES)
        .then((response)=>{
            this.setState({
                packageList : response.data
            })
        })
        .catch((error) => {
            console.log("Error Occurred at Retrieving Packages " + error)
        })
    }

    render() {
        return (
            <div>
                <div>
            <section className='bg-dark text-white text-center py-5'>
                <div className='container'>
                    <h1 className='display-4'>Explore our Travel Packages</h1>
                    <p className='lead'>Handpicked destinations for every traveler. Find your perfect getaway!</p>
                </div>
            </section>

            <section className='py-5'>
                <div className='container'>
                    <h2 className='text-center mb-4'>Our Featured Packages</h2>
                    <div className='row g-4'>
                        {
                            this.state.packageList.map((tour) => {
                                return (
                                    <div className='col-md-4'>
                                        <div className='card h-100' style={{ width: "350px", height: "200px" }}>
                                            <img src={tour.image} className='card-img-top' alt={tour.name}
                                                style={{ width: "350px", height: "200px", objectFit: "cover" }} />
                                            <div className='card-body'>
                                                <h5 className='card-title'>{tour.name}</h5>
                                                <p className='card-text'>{tour.description}</p>
                                                <ul className='list-group list-group-flush'>
                                                    <li className='list-group-item'>Duration: {tour.duration}</li>
                                                    <li className='list-group-item'>Price: ₹{tour.price} per Person </li>
                                                </ul>
                                            </div>
                                            <div className='card-footer text-center'>
                                                <NavLink to='#' className='btn btn-primary'>View Details</NavLink>
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
            </div>
        )
    }
}
