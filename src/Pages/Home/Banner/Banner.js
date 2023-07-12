import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import logo from "../../../assets/images/download__1_-removebg-preview.png";

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/grilled-chicken-legs-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pepper-seeds-salt_1150-37782.jpg?size=626&ext=jpg&ga=GA1.1.1171536829.1687749376&semt=sph")' }}>
            <div className="hero-overlay bg-opacity-30">

                <div className="absolute flex justify-between transform -translate-y-1/2  right-5 top-6/12">

                </div>
            </div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <div className='flex justify-center'>
                        <img src={logo} alt="" />
                    </div>
                    <h1 className="mb-5 text-5xl text-white font-bold">La Uncion</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-error text-white bg-red-500">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;