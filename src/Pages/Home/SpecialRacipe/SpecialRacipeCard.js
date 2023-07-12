import React from 'react';
import { BiSolidDish } from 'react-icons/bi';

const SpecialRacipeCard = ({ product }) => {
    const { flex, img, title, details, price } = product;
    return (
        // <div className="hero bg-base-200">
        //     <div className="hero-content flex-col lg:flex-row">
        //         <img src="http://bunch.asiandevelopers.com/wp/radhuni/wp-content/uploads/2015/06/image-21.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        //         <div>
        //             <h1 className="text-5xl font-bold">Box Office News!</h1>
        //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        //             <button className="btn btn-primary">Get Started</button>
        //         </div>
        //     </div>
        // </div>
        <div className={`card card-side flex-col ${flex}`}>
            <figure><img className='rounded-none m-2 w-80' src={img} alt="Movie" /></figure>
            <div className="card-body text-center md:w-1/2 lg:w-1/2">
                <div className='justify-center mx-auto'>
                    <p className='text-4xl text-center'><BiSolidDish /></p>
                </div>
                <p className='text-xl font-semibold'>{title}</p>
                <p className=''>{details}</p>
                <p className='text-2xl text-red-600 font-semibold'>${price}</p>
                <div className="card-actions  justify-center">
                    <button className="btn btn-outline btn-error btn-sm">Order now</button>
                </div>
            </div>
        </div>
        //  http://bunch.asiandevelopers.com/wp/radhuni/#
    );
};

export default SpecialRacipeCard;