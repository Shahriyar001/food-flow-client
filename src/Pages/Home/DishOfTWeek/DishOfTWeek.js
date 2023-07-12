import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const DishOfTWeek = () => {
    return (
        <div className="hero min-h-screen my-10" style={{ backgroundImage: 'url("https://media.istockphoto.com/id/653391558/photo/fresh-organic-vegetables-on-blackboard.jpg?s=612x612&w=0&k=20&c=t78cBJ0TQyWKduic60n0AGKryKcrPpOQXUdVIkZ-yas=")' }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className='' src="http://bunch.asiandevelopers.com/wp/radhuni/wp-content/uploads/2015/06/image-12.jpg" alt="Album" /></figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title text-3xl mt-10">Tamagodon Grill</h2>
                    <p className='font-semibold'>DISH OF THE WEEK.</p>
                    <div className='flex my-5 text-yellow-500'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfAlt />
                    </div>
                    <div className='w-60 mt-5'>
                        <p className='w-92 mt-[-30px]'>Tamagodon is a Japanese donburi dish that is simple and quick to prepare. It consists of fluffy eggs that are placed on top of steamed rice. The omelet is often enriched with onions and a savory sauce made with mirin, dashi, and soy sauce.</p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-error">more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DishOfTWeek;