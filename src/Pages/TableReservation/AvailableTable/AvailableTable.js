import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableOptions from './AvailableOptions';
import BookingModal from '../BookingModal/BookingModal';
// import AvailableOptions from './AvailableOptions';
// import BookingModal from '../BookingModal/BookingModal';

const AvailableTable = ({ selectedDate }) => {
    const [tableOptions, setTableOptions] = useState([])
    const [table, setTable] = useState(null)

    useEffect(() => {
        fetch('options.json')
            .then(res => res.json())
            .then(data => setTableOptions(data))
    }, [])
    return (
        <section className='my-10'>
            <p className='text-center text-red-600 font-bold'>Reservation on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 my-10 lg:ml-20 ml-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    tableOptions.map(option => <AvailableOptions
                        key={option._id}
                        option={option}
                        setTable={setTable}
                    ></AvailableOptions>)
                }
            </div>
            {
                table &&
                <BookingModal
                    selectedDate={selectedDate}
                    table={table}
                    setTable={setTable}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableTable;