import React from 'react';
import { FaFacebook, FaGoogle, FaPinterest, FaTwitter, IconName } from "react-icons/fa";

const TeamCard = ({ chef }) => {
    const { img, title, details } = chef;
    return (
        <div className="card rounded-none w-80">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">

                <p className='text-xl font-semibold'>{title}</p>
                <p className='my-2'>{details}</p>
                <div className='flex gap-3'>
                    <p><FaFacebook /></p>
                    <p><FaTwitter /></p>
                    <p><FaGoogle /></p>
                    <p><FaPinterest /></p>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;