import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddChef = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate();

    const handleAddChef = data => {
        console.log(data)
        const chef = {
            name: data.name,
            email: data.email,
            specialty: data.specialty
        }

        fetch('https://food-flow-server.vercel.app/chefs', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(chef)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success(`${data.name} is added successfully`);
                navigate('/dashboard/manageChefs')
            })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://motionarray.imgix.net/preview-549210-0dOOKpsQvjq4q1Jg-large.jpg?w=660&q=60&fit=max&auto=format" alt='/' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:w-1/2 m-5'>
                        <form className='w-96 p-7' onSubmit={handleSubmit(handleAddChef)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Name</span></label>
                                <input type="text" {...register("name",
                                    { required: "Name is required" }
                                )} className="input input-bordered w-full max-w-xs" />
                                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Email</span></label>
                                <input type="email" {...register("email", { required: true })} className="input input-bordered w-full max-w-xs" />
                                {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Specialty</span></label>
                                <select
                                    {...register('specialty')}
                                    className="select input-bordered w-full max-w-xs">

                                    <option>Sous chef</option>
                                    <option>Butcher chef</option>
                                    <option>Pastry chef</option>
                                    <option>Roast chef</option>


                                </select>

                            </div>
                            {/* <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Photo</span></label>
                                <input type="file" {...register("image",
                                    { required: "Photo is required" }
                                )} className="input input-bordered w-full max-w-xs" />
                                {errors.img && <p className='text-red-500'>{errors.img.message}</p>}
                            </div> */}
                            <input className='btn btn-accent w-full mt-4' value="Add A Chef" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddChef;