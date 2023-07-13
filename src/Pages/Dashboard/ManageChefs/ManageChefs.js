import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import { toast } from 'react-hot-toast';

const ManageChefs = () => {

    const [deletingChef, setDeletingChef] = useState(null);



    const { data: chefs, isLoading, refetch } = useQuery({
        queryKey: ['chefs'],
        queryFn: async () => {
            try {
                const res = await fetch('http://localhost:5000/chefs');
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    })

    const handleDeleteChef = chef => {
        fetch(`http://localhost:5000/chefs/${chef._id}`, {
            method: 'DELETE',
            headers: {

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success('Chef Delete successfully')
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2>Manage Doctors: {chefs?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Avater</th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            chefs.map((chef, i) => <tr key={chef._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar online">
                                    <div className="w-20 rounded-full">
                                        <img alt='/' src="https://cdn4.vectorstock.com/i/1000x1000/46/88/avatar-of-a-chef-character-vector-45834688.jpg" />
                                    </div>
                                </div>
                                </td>
                                <td>{chef.name}</td>
                                <td>{chef.email}</td>
                                <td>{chef.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletingChef(chef)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                    {/* <button className='btn btn-sm btn-error'>Delete</button> */}
                                </td>

                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
            {
                deletingChef && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`if you delete ${deletingChef.name}. it cannot be undone. `}
                    successAction={handleDeleteChef}
                    btnName="Delete"
                    modalData={deletingChef}
                ></ConfirmationModal>
            }
        </div>
    );
};

export default ManageChefs;