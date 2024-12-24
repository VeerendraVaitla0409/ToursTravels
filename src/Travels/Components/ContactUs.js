import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <div class="container py-5">
                <h1 class="text-center mb-4">Contact Us</h1>

                <div class="row">
                    <div class="col-md-6">
                        <h3>Send Us a Message</h3>
                        <form>
                            <div class="mb-3">
                                <label for="name" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" placeholder="Your Email" required />
                            </div>
                            <div class="mb-3">
                                <label for="subject" class="form-label">Subject</label>
                                <input type="text" class="form-control" id="subject" placeholder="Subject" required />
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
                    </div>

                    <div class="col-md-6">
                        <div class="row d-flex flex-column" style={{ height: "100%" }}>
                            <div class="col-12 mb-3" style={{ flex: "1" }}>
                                <h3>Our Contact Information</h3>
                                <ul class="list-unstyled">
                                    <li><strong>Address:</strong> 1234 Travel Agency Rd, Cityville, Country</li>
                                    <li><strong>Email:</strong> support@yourtravelwebsite.com</li>
                                    <li><strong>Phone:</strong> +1 234 567 890</li>
                                    <li><strong>Working Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM</li>
                                </ul>
                            </div>
                            <div class="col-12" style={{ flex: "1" }}>
                                <h3>Find Us On The Map</h3>
                                <div class="embed-responsive embed-responsive-16by9">
                                    <iframe class="embed-responsive-item"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1795821338767!2d-122.47825538468153!3d37.80350367975498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e5d0bc31507%3A0x4780b4fadd727a88!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1634112639373!5m2!1sen!2sus"
                                        allowfullscreen="" loading="lazy" title="Map of the Organization"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
