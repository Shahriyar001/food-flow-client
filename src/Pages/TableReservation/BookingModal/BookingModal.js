import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ table, setTable, selectedDate }) => {
    const { name, slots } = table;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            bookingDate: date,
            table: name,
            user: name,
            slot,
            email,
            phone
        }

        console.log(booking);
        setTable(null);
    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" disabled value={date} placeholder="Type here" className="input input-bordered input-error w-full " />
                        <select name='slot' className="select select-error w-full">

                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered input-error w-full " />
                        <input name='email' type="text" placeholder="Email" className="input input-bordered input-error w-full " />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-error w-full " />
                        <input type="submit" className='w-full btn btn-error ' value="Submit" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor="booking-modal" className="btn">Close</label>
                        {/* <label className="modal-backdrop" htmlFor="booking-modal">Close</label> */}
                    </div>
                </div>
            </div>

        </>
    );
};

export default BookingModal;