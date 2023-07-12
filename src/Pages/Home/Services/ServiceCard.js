import React from 'react';
import { MdFoodBank } from "react-icons/md";

const ServiceCard = ({ service }) => {
    const { img, title, details } = service;
    return (
        <div className="card rounded-none w-80">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='justify-center mx-auto'>
                    <p className='text-4xl text-center text-red-600'><MdFoodBank /></p>
                </div>
                <p className='text-xl font-semibold'>{title}</p>
                <p>{details}</p>
                <div className="">
                    <button className="btn btn-ghost btn-lg text-red-600 lowercase">learn more..</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;