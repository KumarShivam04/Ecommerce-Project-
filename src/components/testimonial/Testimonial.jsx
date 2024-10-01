import React from 'react';

import img1 from "../../assets/Ramanujam.jpeg";  
import img2 from "../../assets/Ramendra.jpeg";
import img3 from '../../assets/Shivam.jpeg';
import img4 from '../../assets/Tribhuvan.jpeg'; 
import img5 from '../../assets/Sadashiv.jpeg';
import img6 from '../../assets/nikhil.jpeg';
import img7 from '../../assets/Sachin.jpeg';
import img8 from '../../assets/Sumit.jpg';
import img9 from '../../assets/Sourav.png';

const Testimonial = () => {
    return (
        <div>
            <style>
                {`
                    .rating {
                        font-size: 24px;
                        color: orange; 
                    }
                `}
            </style>

            <section className="text-gray-600 body-font mb-10">
                <div className="container px-5 py-10 mx-auto">
                    {/* Heading */}
                    <h1 className='text-center text-3xl font-bold text-black'>Testimonial</h1>
                    {/* Para */}
                    <h2 className='text-center text-2xl font-semibold mb-10'>
                        What our <span className='text-pink-500'>customers</span> are saying
                    </h2>

                    {/* Testimonial Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Testimonial 1 */}
                        <div className="p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full 
                                    inline-block border-2 border-gray-200 bg-gray-100 transition-transform 
                                    duration-300 ease-in-out hover:scale-110 hover:shadow-lg" src={img1} />
                                <p className="rating">★★★★★</p>
                                <p className="leading-relaxed">I was impressed with the fast shipping and the quality of the product. 
                                    The website is well-organized, making it easy to find what I needed.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Kumar Ramanujam</h2>
                                <p className="feedback-date">July 10, 2024</p>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full 
                                    inline-block border-2 border-gray-200 bg-gray-100 transition-transform 
                                    duration-300 ease-in-out hover:scale-110 hover:shadow-lg" src={img2} />
                                <p className="rating">★★★★★</p>
                                <p className="leading-relaxed">Great customer service! I had a question about my order, 
                                    and it was resolved quickly. The website is very user-friendly, and I love the design.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Ramendra Kumar</h2>
                                <p className="feedback-date">July 30, 2024</p>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full 
                                    inline-block border-2 border-gray-200 bg-gray-100 transition-transform 
                                    duration-300 ease-in-out hover:scale-110 hover:shadow-lg" src={img3}/>
                                <p className="rating">★★★★</p>
                                <p className="leading-relaxed">The product quality is excellent, and I love how easy 
                                    it is to navigate the website. Shopping here was a great experience.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Shivam Kumar</h2>
                                <p className="feedback-date">August 10, 2024</p> 
                            </div>
                        </div>

                        {/* Testimonial 4 */}
                        <div className="p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full 
                                    inline-block border-2 border-gray-200 bg-gray-100 transition-transform 
                                    duration-300 ease-in-out hover:scale-110 hover:shadow-lg" src={img4} />
                                <p className="rating">★★★★★</p>
                                <p className="leading-relaxed">I had a wonderful shopping experience. The products arrived in perfect condition.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Tribhuvan Kumar</h2>
                                <p className="feedback-date">August 15, 2024</p>
                            </div>
                        </div>

                        {/* Testimonial 5 */}
                        <div className="p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full 
                                    inline-block border-2 border-gray-200 bg-gray-100 transition-transform 
                                    duration-300 ease-in-out hover:scale-110 hover:shadow-lg" src={img5} />
                                <p className="rating">★★★★</p>
                                <p className="leading-relaxed">The delivery was a bit slow, but the product quality made up for it. I will shop again.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sadashiv Kumar</h2>
                                <p className="feedback-date">August 20, 2024</p>
                            </div>
                        </div>

                        {/* Testimonial 6 */}
                        <div className="p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full 
                                    inline-block border-2 border-gray-200 bg-gray-100 transition-transform 
                                    duration-300 ease-in-out hover:scale-110 hover:shadow-lg" src={img6} />
                                <p className="rating">★★★★★</p>
                                <p className="leading-relaxed">Absolutely love my purchase! The quality is outstanding.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Nikhil Singh</h2>
                                <p className="feedback-date">September 1, 2024</p>
                            </div>
                        </div>

                        {/* Testimonial 7 */}
                        <div className="p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full 
                                    inline-block border-2 border-gray-200 bg-gray-100 transition-transform 
                                    duration-300 ease-in-out hover:scale-110 hover:shadow-lg" src={img7} />
                                <p className="rating">★★★★</p>
                                <p className="leading-relaxed">Good experience overall. Will definitely recommend to friends.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sachin Kumar</h2>
                                <p className="feedback-date">September 5, 2024</p>
                            </div>
                        </div>

                        {/* Testimonial 8 */}
                        <div className="p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full 
                                    inline-block border-2 border-gray-200 bg-gray-100 transition-transform 
                                    duration-300 ease-in-out hover:scale-110 hover:shadow-lg" src={img8} />
                                <p className="rating">★★★★★</p>
                                <p className="leading-relaxed">Fantastic products! The quality exceeded my expectations.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sumit Kumar</h2>
                                <p className="feedback-date">September 15, 2024</p>
                            </div>
                        </div>

                        {/* Testimonial 9 */}
                        <div className="p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full 
                                    inline-block border-2 border-gray-200 bg-gray-100 transition-transform 
                                    duration-300 ease-in-out hover:scale-110 hover:shadow-lg" src={img9} />
                                <p className="rating">★★★★</p>
                                <p className="leading-relaxed">Great shopping experience! I’m very satisfied with my purchase.</p>
                                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Sourav Kumar</h2>
                                <p className="feedback-date">September 20, 2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Testimonial;
