import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const navigate = useNavigate();
    // const [data, setData] = useState('');

    const handleSignUp = (data) => {
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err => console.log(err))
                toast('User Created Successfully');

                // saveUser(data.name, data.email);
            })
            .catch(error => {
                console.log(error)
                setSignUpError(error.message)
            });
    }
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RSXNJJG/Screenshot-34.png)' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-white">

                    <div className="w-[800px] flex justify-center items-center">

                        <div className='w-96 p-7'>
                            <h2 className='text-xl font-semibold'>Sign Up</h2>
                            <form onSubmit={handleSubmit(handleSignUp)}>

                                <div className="form-control w-full max-w-sm">
                                    <label className="label">
                                        <span className="label-text text-white">Name</span>
                                    </label>
                                    <input type="text" {...register("Name", { required: "Name is required" })}
                                        className="input input-ghost input-bordered input-error w-full " />
                                    {errors.name && <p className='text-red-400'>{errors.name?.message}</p>}

                                </div>

                                <div className="form-control w-full max-w-sm">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: "Email Address is required" })}
                                        className="input input-ghost input-bordered input-error w-full " />
                                    {errors.email && <p className='text-red-400'>{errors.email?.message}</p>}
                                </div>

                                <div className="form-control w-full max-w-sm">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 6, message: "Password must be 6 characters long" }
                                    })}
                                        className="input input-ghost input-bordered input-error w-full " />
                                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}

                                    <label className="label">

                                    </label>
                                </div>
                                {/* <p>{data}</p> */}
                                <input className='btn btn-error w-full mt-2' value='Sign Up' type="submit" />
                                {signUpError && <p className='text-red-600'>{signUpError}</p>}
                            </form>
                            <p className='my-2'>Already have account? <Link className='text-error' to='/login'
                            > Please login</Link></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;