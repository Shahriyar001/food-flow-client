import React from 'react';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';

const AllUsers = () => {



    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://food-flow-server.vercel.app/users');
            const data = await res.json()
            return data;
        }
    });

    const handleMakeAdmin = id => [
        fetch(`https://food-flow-server.vercel.app/users/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin successful')
                    refetch();
                }
            })
    ]

    return (
        <div>
            <h2>ALl Users</h2>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs pb-1 text-white btn-info'>Make Admin</button>}</td>
                                <td><button className='btn btn-xs pb-1 text-white btn-error'>Delete</button></td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;