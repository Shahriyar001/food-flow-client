import React from 'react';

const ReservationBanner = () => {
    return (
        <div className="hero h-96" style={{ backgroundImage: 'url("https://image.slidesdocs.com/responsive-images/background/gold-dining-table-surroundings-hotel-restaurant-room-powerpoint-background_a2115f2112__960_540.jpg")' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-white">
                    <h1 className="mb-5 text-5xl font-bold">Table Booking</h1>
                    <p className="mb-5">This is the page from where you can book table for your reservation.</p>
                    <button className="btn btn-error text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ReservationBanner;