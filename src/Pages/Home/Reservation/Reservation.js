import React from 'react';

const Reservation = () => {
    return (
        <div className='lg:flex mt-5'>
            <div className=' w-1/3 h-80 mx-auto  grid place-items-center'>
                <div>
                    <p className='text-3xl font-semibold'>MAKE <br />A <br />RESERVATION</p>
                </div>
            </div>
            <div className="divider lg:divider-horizontal"></div>
            <div className=' w-2/3 lg:h-80 mx-auto grid place-items-center'>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    <input type="text" placeholder="Name" className="input input-bordered input-error w-full max-w-xs" />
                    <input type="text" placeholder="Email" className="input input-bordered input-error w-full max-w-xs" />
                    <input type="text" placeholder="Data" className="input input-bordered input-error w-full max-w-xs" />
                    <input type="text" placeholder="Phone" className="input input-bordered input-error w-full max-w-xs" />
                    <input type="text" placeholder="Guest" className="input input-bordered input-error w-full max-w-xs" />
                    <input type="text" placeholder="Time" className="input input-bordered input-error w-full max-w-xs" />
                    <div>
                        <button className="btn btn-outline btn-error">Send</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Reservation;