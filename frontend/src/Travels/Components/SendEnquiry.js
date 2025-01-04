import React, { Component } from 'react'

import "../css/style.travels.css"
import axios from 'axios';
import { ENDPOINTS } from '../constants/urls'

export default class SendEnquiry extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            mobile: '',
            email: '',
            tourPackage: 'Choose a Package',
            service: "Choose a Service",
            formSubmitted: false,
            services: [], 
            packages: []
        }

        // Refs for input fields
        this.nameRef = React.createRef();
        this.mobileRef = React.createRef();
        this.emailRef = React.createRef();
    }

    changeData = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleDropdownSelect = (fieldName, value) => {
        this.setState({ [fieldName]: value });
    };

    componentDidMount() {

        axios.get(ENDPOINTS.GET_PACKAGES)
        .then((response) => {
           const filteredPackages = response.data.map(item => ({
                id: item.id,
                name: item.name
            }));
            this.setState({
                packages: filteredPackages
            })
        })
        .catch((error) => {
            console.log("Error Occurred retrieving Packages" + error)
        })

        axios.get(ENDPOINTS.GET_SERVICES)
            .then((response) => {
               const filteredServiceData = response.data.map(item => ({
                    id: item.id,
                    name: item.name
                }));
                this.setState({
                    services: filteredServiceData
                })
            })
            .catch((error) => {
                console.log("Error Occurred retrieving Services" + error)
            })
    }

    resetForm = () => {
        this.setState({
            name: '',
            mobile: '',
            email: '',
            tourPackage: 'Choose a Package',
            service: "Choose a Service",
            formSubmitted: false,
            nameError: "",
            mobileError: "",
            emailError: "",
            tourPackageError: "",
            serviceError: "",
        });
    };

    submitHandler = (e) => {
        e.preventDefault();

        const { name, mobile, email, tourPackage, service } = this.state;
        let formValid = true; // Flag to check if form is valid

        const alphaExp = /^[A-Za-z\s]+$/;
        const mobileExp = /^(?:\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}$/;
        const emailExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        const nameError = document.getElementById("nameError");
        const mobileError = document.getElementById("mobileError");
        const emailError = document.getElementById("emailError");
        const tourPackageError = document.getElementById("tourPackageError");
        const serviceError = document.getElementById("serviceError");

        // Clear all error messages initially
        this.setState({
            nameError: "",
            mobileError: "",
            emailError: "",
            tourPackageError: "",
            serviceError: "",
        });

        if (name === "") {
            nameError.textContent = "Please enter Name";
            formValid = false;
            this.nameRef.current.focus();
        } else if (!name.match(alphaExp)) {
            nameError.textContent = "Please enter Name which contains Alphabets";
            this.nameRef.current.focus();
            formValid = false;
        } else {
            nameError.textContent = "";
        }

        if (mobile === "") {
            mobileError.textContent = "Please Enter Mobile No";
            this.mobileRef.current.focus();
            formValid = false;
        } else if (mobile.length !== 10) {
            mobileError.textContent = "Please Enter 10 digit Mobile No";
            this.mobileRef.current.focus();
            formValid = false;
        }
        else if (!mobile.match(mobileExp)) {
            mobileError.textContent = "Please enter valid Mobile No";
            this.mobileRef.current.focus();
            formValid = false;
        } else {
            mobileError.textContent = "";
        }

        if (mobile === "") {
            emailError.textContent = "Please Enter Email";
            this.emailRef.current.focus();
            formValid = false;
        }
        else if (!email.match(emailExp)) {
            emailError.textContent = "Please enter valid Email Id";
            this.emailRef.current.focus();
            formValid = false;
        } else {
            emailError.textContent = "";
        }

        if (tourPackage === "Choose a Package") {
            tourPackageError.textContent = "Please Select a Package";
            formValid = false;
        } else {
            tourPackageError.textContent = "";
        }

        if (service === "Choose a Service") {
            serviceError.textContent = "Please Select a Service";
            formValid = false;
        } else {
            serviceError.textContent = "";
        }

        if (formValid) {

            axios.post(ENDPOINTS.ADD_ENQUIRY, {
                ...this.state,
                serviceError: undefined,
                nameError: undefined,
                mobileError: undefined,
                emailError: undefined,
                tourPackageError: undefined
            })
                .then(() => {
                    console.log("Form Submitted Successfully")
                })
                .catch(() => {
                    console.log("Error in Submitted Enquiry")
                })

            this.setState({ formSubmitted: true }); // Update formSubmitted state

            setTimeout(() => {
                this.resetForm(); // Reset the form after 2 seconds (for success message to show)
            }, 1000);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' name='name' placeholder='Enter Name' onChange={this.changeData} value={this.state.name} className=' form-control mb-3' ref={this.nameRef} />
                    <p id="nameError"></p>
                    <input type='text' name='mobile' placeholder='Mobile Number' onChange={this.changeData} value={this.state.mobile} className=' form-control mb-3' ref={this.mobileRef} />
                    <p id="mobileError"></p>
                    <input type='text' name='email' placeholder='Email Address' onChange={this.changeData} value={this.state.email} className=' form-control mb-3' ref={this.emailRef} />
                    <p id="emailError"></p>

                    <div className="dropdown form-group mb-3">
                        <button className="btn btn-outline-secondary dropdown-toggle form-control text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {this.state.tourPackage}
                        </button>
                        <ul className="dropdown-menu">
                            {this.state.packages.map((pkg) => (
                                <li key={pkg.id} className="dropdown-item" onClick={() => this.handleDropdownSelect("tourPackage", pkg.name)}>{pkg.name}</li>
                            ))}
                        </ul>
                    </div>
                    <p id="tourPackageError"></p>

                    <div className="dropdown form-group mb-3">
                        <button className="btn btn-outline-secondary dropdown-toggle form-control text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {this.state.service}
                        </button>
                        <ul className="dropdown-menu">
                            {this.state.services.map((srv) => (
                                <li key={srv.id} className="dropdown-item" onClick={() => this.handleDropdownSelect("service", srv.name)}>{srv.name}</li>
                            ))}
                        </ul>
                    </div>
                    <p id="serviceError"></p>
                    <input type='submit' className=' form-control mb-3 btn btn-success' />
                </form>
                {this.state.formSubmitted && (
                    <div className="alert alert-success mt-3">Form submitted successfully!</div>
                )}
            </div>
        )
    }
}
