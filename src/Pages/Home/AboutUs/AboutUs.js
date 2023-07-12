import React from 'react';
import img from "../../../assets/images/about-us-image.png";
import img2 from "../../../assets/images/underline1.png";

const AboutUs = () => {
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="rounded-lg p-10 ml-5" />
                <div className='w-1/2'>
                    <p className='text-red-500 italic font-semibold text-2xl'>About Us</p>
                    <h1 className="text-3xl font-bold">We are Tasty.</h1>
                    <img className='w-48 mt-2' src={img2} alt="" />
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-error bg-red-500 text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;