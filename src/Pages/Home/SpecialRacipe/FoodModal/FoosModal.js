import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const FoosModal = ({ singpro, setSingpro }) => {
    const { img, details, title } = singpro;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const detail = form.detail.value;
        const email = form.email.value;

        const bookings = {
            img,
            title,
            detail,
            email
        }
        console.log(bookings)

        fetch('https://food-flow-server.vercel.app/foodBooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setSingpro(null);
                    toast.success('Booking confirmed');
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className="hero  bg-base-200">
                        <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                            <img src={img} alt='/' className="w-60 rounded-lg shadow-2xl" />

                            <input name='title' defaultValue={title} type="text" placeholder="Name" className="input input-bordered input-error w-full " />
                            <input name='detail' defaultValue={details} type="text" placeholder="Name" className="input input-bordered input-error w-full " />
                            <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Email" className="input input-bordered input-error w-full " />
                            <input type="submit" className='w-full btn btn-error ' value="Order" />

                        </form>
                        {/* <div className="hero-content flex-col ">
                            
                            <div>
                                <h1 className="text-3xl font-bold">{title}</h1>
                                <p className="py-6">{details}</p>
                                
                                <div className='flex justify-end'>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-error mx-3 text-neutral-50">Order</button>
                                    </div>

                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FoosModal;