import React, { Component } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { ENDPOINTS } from '../constants/urls'

export default class Services extends Component {

    constructor() {
        super();
        this.state = {
            serviceList: []
        }
    }

    componentDidMount() {
        axios.get(ENDPOINTS.GET_SERVICES)
            .then((res) => {
                this.setState({
                    serviceList: res.data
                })
            })
            .catch((err) => {
                console.log("Error Occured " + err)
            })
    }

    render() {
        return (
            <div>
                <section className="services py-5">
                    <div className="container">
                        <div className="row text-center mb-5">
                            <div className="col-12">
                                <h2 className="display-4">Our Services</h2>
                                <p className="lead text-muted">Explore the amazing services we offer to make your travel unforgettable.</p>
                            </div>
                        </div>
                        <div className='row g-4'>
                            {
                                this.state.serviceList.map((service) => {
                                    return (
                                        <div className="col-md-4" key={service.id}>
                                            <div className="card service-card">
                                                <img src={service.image} className="card-img-top service-image" alt="Tour Packages" style={{ height: "200px" }} />
                                                <div className="card-body">
                                                    <h5 className="card-title service-title">{service.name}</h5>
                                                    <p className="card-text service-description">{service.description}</p>
                                                    <NavLink to="#" className="btn btn-primary">{service.ctaText}</NavLink>
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
}
