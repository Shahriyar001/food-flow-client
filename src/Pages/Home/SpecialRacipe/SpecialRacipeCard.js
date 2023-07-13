import React from 'react';
import { BiSolidDish } from 'react-icons/bi';

const SpecialRacipeCard = ({ product, setSingpro }) => {
    const { flex, img, title, details, price } = product;
    return (
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
                    <label onClick={() => setSingpro(product)} htmlFor="booking-modal-2" className="btn btn-outline btn-error btn-sm">Order now</label>
                    {/* <label
                        htmlFor="booking-modal" className="btn btn-error text-white"
                        onClick={() => setTable(option)}
                    >Book Table</label> */}
                </div>
            </div>
        </div>
        //  http://bunch.asiandevelopers.com/wp/radhuni/#
    );
};

export default SpecialRacipeCard;