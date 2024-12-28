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

        const nameError = document.getElementById("nameError");
        const mobileError = document.getElementById("mobileError");
        const emailError = document.getElementById("emailError");
        const selectedPackageError = document.getElementById("selectedPackageError");
        const selectedServiceError = document.getElementById("selectedServiceError");

        const alphaExp = /^[A-Za-z\s]+$/;
        const mobileExp = /^(?:\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}$/;
        const emailExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (username === "") {
            nameError.textContent = "Please enter Name";
            formValid = false;
        } else {
            if (username.match(alphaExp)) {
                nameError.textContent = "";
            } else {
                nameError.textContent = "Please enter Name which contains Alphabets";
                formValid = false;
            }
        }

        if (mobile.match(mobileExp)) {
            mobileError.textContent = "";
        } else {
            if (mobile === "") {
                mobileError.textContent = "Please Enter Mobile No";
                formValid = false;
            }
            else if (mobile.length !== 10) {
                mobileError.textContent = "Please Enter 10 digit Mobile No";
                formValid = false;
            }
            else {
                mobileError.textContent = "Please enter valid Mobile No";
                formValid = false;
            }
        }

        if (email.match(emailExp)) {
            emailError.textContent = "";
        } else {
            if (mobile === "") {
                emailError.textContent = "Please Enter Email";
                formValid = false;
            }
            else {
                emailError.textContent = "Please enter valid Email Id";
                formValid = false;
            }
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
                    <input type='text' name='username' placeholder='Enter Name' onChange={this.changeData} value={this.state.username} className=' form-control mb-3' />
                    <p id="nameError"></p>
                    <input type='text' name='mobile' placeholder='Mobile Number' onChange={this.changeData} value={this.state.mobile} className=' form-control mb-3' />
                    <p id="mobileError"></p>
                    <input type='text' name='email' placeholder='Email Address' onChange={this.changeData} value={this.state.email} className=' form-control mb-3' />
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
