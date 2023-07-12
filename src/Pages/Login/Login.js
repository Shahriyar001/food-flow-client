import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data)
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            })
    }


    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/RSXNJJG/Screenshot-34.png)' }}>
                <div className="hero-overlay bg-opacity-0"></div>
                <div className="hero-content text-center text-white">

                    <div className="w-[800px] flex justify-center items-center">

                        <div className='w-96 p-7'>
                            <h2 className='text-xl font-semibold'>Login</h2>
                            <form onSubmit={handleSubmit(handleLogin)}>

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
                                    <input type="password" {...register("password", { required: "Password is required" })}
                                        className="input input-ghost input-bordered input-error w-full " />
                                    {errors.password && <p className='text-red-400'>{errors.password?.message}</p>}
                                    <label className="label">
                                        <span className="label-text text-white">Forget Password?</span>
                                    </label>
                                </div>
                                {/* <p>{data}</p> */}
                                <input className='btn btn-error w-full' value='login' type="submit" />
                                <div>
                                    {loginError && <p className='text-red-500'>{loginError}</p>}
                                </div>
                            </form>
                            <p className='my-2'>New To Food Flow? <Link className='text-error' to='/signup'
                            >Create Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;