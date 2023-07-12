import React from 'react';
import { GiWoodenChair } from "react-icons/gi";

const AvailableOptions = ({ option, setTable }) => {
    const { img, name, sit, slots } = option;
    return (
        <div className="card card-compact w-96 my-3 bg-base-100 shadow-xl">
            <figure><img src={img} className='w-full' alt="Shoes" /></figure>
            <div className="card-body text-center">
                <h2 className="text-2xl text-red-500 text-center font-semibold">{name}</h2>
                <div className='place-items-center grid'>
                    <p className='flex items-center text-center gap-2 font-semibold text-red-600'><GiWoodenChair />{sit}</p>
                </div>
                <p>{slots.length > 0 ? slots[0] : "Try Another day"}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available.</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal" className="btn btn-error text-white"
                        onClick={() => setTable(option)}
                    >Book Table</label>
                </div>
            </div>
        </div>
    );
};

export default AvailableOptions;