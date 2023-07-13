import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useQuery } from 'react-query';

const MyTable = () => {
    const { user } = useContext(AuthContext);
    console.log(user)

    const url = `http://localhost:5000/bookings?email=${user.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json()
            return data;
        }
    })

    return (
        <div>
            <h2>my table</h2>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Table</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.user}</td>
                                <td>{booking.table}</td>
                                <td>{booking.bookingDate}</td>
                                <td>{booking.slot}</td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTable;