import React, { useState } from 'react';

const ContactUs = () => {
    // State to manage form inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: ''
    });

    // Handler to update form data
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // You can add your form submission logic here
        alert('Your message has been submitted!');
        // Reset form
        setFormData({ name: '', email: '', mobile: '', message: '' });
    };

    return (
        <section className="text-gray-600 body-font relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We would love to hear from you! Please fill out the form below and we’ll get in touch shortly.</p>
                </div>

                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
                        {/* Name Input */}
                        <div className="p-2 w-full">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* Email Input */}
                        <div className="p-2 w-full">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        {/* Mobile Number Input */}
                        <div className="p-2 w-full">
                            <label htmlFor="mobile" className="leading-7 text-sm text-gray-600">Mobile No.</label>
                            <input 
                                type="tel" 
                                id="mobile" 
                                name="mobile" 
                                value={formData.mobile}
                                onChange={handleChange}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" 
                                placeholder="Enter your mobile number"
                                required
                            />
                        </div>

                        {/* Query/Message Input */}
                        <div className="p-2 w-full">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Your Query</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-pink-500 focus:bg-white focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" 
                                placeholder="Enter your query or message"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="p-2 w-full">
                            <button 
                                type="submit" 
                                className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
