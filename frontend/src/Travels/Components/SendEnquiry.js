import React, { Component } from 'react'

import "../css/style.travels.css"

export default class SendEnquiry extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            mobile: '',
            email: '',
            selectedPackage: 'Choose a Package',
            selectedService: "Choose a Service",
            formSubmitted: false
        }

        this.packages = [
            { id: 1, name: "Golden Triangle Tour" },
            { id: 2, name: "Himalayan Adventure" },
            { id: 3, name: "Beach Vacation" },
            { id: 4, name: "South India Tour" },
            { id: 5, name: "Cultural Heritage Tour" },
        ];

        this.services = [
            { id: 1, name: "Tour Packages" },
            { id: 2, name: "Hotel Booking" },
            { id: 3, name: "Car Rentals" },
            { id: 4, name: "Guided Tours" },
            { id: 5, name: "Flight Booking" },
            { id: 6, name: "Travel Insurance" }
        ];

        // Refs for input fields
        this.usernameRef = React.createRef();
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

    resetForm = () => {
        this.setState({
            username: '',
            mobile: '',
            email: '',
            selectedPackage: 'Choose a Package',
            selectedService: "Choose a Service",
            formSubmitted: false,
            nameError: "",
            mobileError: "",
            emailError: "",
            selectedPackageError: "",
            selectedServiceError: "",
        });
    };

    submitHandler = (e) => {
        e.preventDefault();

        const { username, mobile, email, selectedPackage, selectedService } = this.state;
        let formValid = true; // Flag to check if form is valid

        const alphaExp = /^[A-Za-z\s]+$/;
        const mobileExp = /^(?:\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}$/;
        const emailExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        const nameError = document.getElementById("nameError");
        const mobileError = document.getElementById("mobileError");
        const emailError = document.getElementById("emailError");
        const selectedPackageError = document.getElementById("selectedPackageError");
        const selectedServiceError = document.getElementById("selectedServiceError");

        // Clear all error messages initially
        this.setState({
            nameError: "",
            mobileError: "",
            emailError: "",
            selectedPackageError: "",
            selectedServiceError: "",
        });

        if (username === "") {
            nameError.textContent = "Please enter Name";
            formValid = false;
            this.usernameRef.current.focus();
        } else if (!username.match(alphaExp)) {
            nameError.textContent = "Please enter Name which contains Alphabets";
            this.usernameRef.current.focus();
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

        if (selectedPackage === "Choose a Package") {
            selectedPackageError.textContent = "Please Select a Package";
            formValid = false;
        } else {
            selectedPackageError.textContent = "";
        }

        if (selectedService === "Choose a Service") {
            selectedServiceError.textContent = "Please Select a Service";
            formValid = false;
        } else {
            selectedServiceError.textContent = "";
        }

        if (formValid) {
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
                    <input type='text' name='username' placeholder='Enter Name' onChange={this.changeData} value={this.state.username} className=' form-control mb-3' ref={this.usernameRef} />
                    <p id="nameError"></p>
                    <input type='text' name='mobile' placeholder='Mobile Number' onChange={this.changeData} value={this.state.mobile} className=' form-control mb-3'  ref={this.mobileRef} />
                    <p id="mobileError"></p>
                    <input type='text' name='email' placeholder='Email Address' onChange={this.changeData} value={this.state.email} className=' form-control mb-3' ref={this.emailRef} />
                    <p id="emailError"></p>

                    <div className="dropdown form-group mb-3">
                        <button className="btn btn-outline-secondary dropdown-toggle form-control text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {this.state.selectedPackage}
                        </button>
                        <ul className="dropdown-menu">
                            {this.packages.map((pkg) => (
                                <li key={pkg.id} className="dropdown-item" onClick={() => this.handleDropdownSelect("selectedPackage", pkg.name)}>{pkg.name}</li>
                            ))}
                        </ul>
                    </div>
                    <p id="selectedPackageError"></p>

                    <div className="dropdown form-group mb-3">
                        <button className="btn btn-outline-secondary dropdown-toggle form-control text-start" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {this.state.selectedService}
                        </button>
                        <ul className="dropdown-menu">
                            {this.services.map((srv) => (
                                <li key={srv.id} className="dropdown-item" onClick={() => this.handleDropdownSelect("selectedService", srv.name)}>{srv.name}</li>
                            ))}
                        </ul>
                    </div>
                    <p id="selectedServiceError"></p>
                    <input type='submit' className=' form-control mb-3 btn btn-success' />
                </form>
                {this.state.formSubmitted && (
                    <div className="alert alert-success mt-3">Form submitted successfully!</div>
                )}
            </div>
        )
    }
}
