import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from "../../../assets/images/download__1_-removebg-preview.png";
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err));
    }
    return (
        <div>
            <div className="navbar bg-neutral text-white pt-2 ">
                <div className="flex-1">
                    <img className='w-32' src={img} alt="" />
                    <a className="btn btn-ghost normal-case text-2xl font-bold">Food Flow</a>
                </div>
                <div className="flex-none gap-2">
                    <div className='mx-4 flex xs:hidden sm:hidden md:hidden lg:block' >
                        <h2>Mon-Set 9.00 am-11.59 pm <br />Sunday closed</h2>
                    </div>
                    <div className='mx-4 xs:hidden  sm:hidden md:hidden lg:block'>
                        <h2>5 Green Ave, Path. <br /> Dhaka, Bangladesh</h2>
                    </div>
                    <div className='mx-4 xs:hidden sm:hidden md:block lg:block'>
                        <h2> <span className='text-2xl font-semibold'>+1 222 333-44-55</span> <br /> Call us for enquiry</h2>
                    </div>
                    <div className='mx-4' >

                        {user?.uid ?
                            <>
                                <button onClick={handleLogOut} className='btn btn-primary'>Sign out</button>
                            </>
                            : <button className='btn btn-primary'><Link to="/login">Log In</Link></button>}
                    </div>
                </div>
            </div>
            <div className="navbar bg-neutral text-white">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/reservation">Table Reservation</Link></li>
                        <li><a>About us</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Contact Us</a></li>
                        {user?.uid ?
                            <>
                                < li > <Link to="/dashboard">Deshboard</Link></li>
                            </>
                            : <button className='btn btn-primary opacity-0'><Link to="/"></Link></button>}


                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;