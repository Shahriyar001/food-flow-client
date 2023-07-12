import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

const Login = () => {

    // const { register, handleSubmit } = useForm()
    // const [data, setData] = useState('');


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RSXNJJG/Screenshot-34.png)' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-white">

                    <div className="w-[800px] flex justify-center items-center">

                        <div>
                            <h2 className='text-2xl font-semibold'>Login</h2>
                            {/* <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

                                <div className="form-control w-full max-w-sm">
                                    <label className="label">
                                        <span className="label-text text-white">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} className="input input-bordered w-full max-w-xs" />
                                </div>

                                <div className="form-control w-full max-w-sm">
                                    <label className="label">
                                        <span className="label-text text-white">Password</span>
                                    </label>
                                    <input type="password" {...register("password")} className="input input-bordered w-full max-w-xs" />
                                </div>
                                <p>{data}</p>
                                <input type="submit" />
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;