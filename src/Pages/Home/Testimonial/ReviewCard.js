import React from 'react';

const ReviewCard = ({ card }) => {
    const { name, add, description } = card;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="mb-4 text-red-500 font-semibold">{add}</p>
                <p className='text-xl my-3'>{description}</p>
            </div>
        </div>
    );
};

export default ReviewCard;