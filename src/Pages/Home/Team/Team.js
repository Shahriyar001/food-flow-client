import React, { useEffect, useState } from 'react';
import img from "../../../assets/images/underline1.png";
import TeamCard from './TeamCard';


const Team = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])
    console.log(chefs)
    return (
        <div className='mt-10 ml-16'>
            <div>
                <p className='text-xl italic my-2 text-red-600 font-semibold'>Our Team</p>
                <h1 className='text-3xl my-2 font-bold'>MEET OUR STAFF</h1>
                <img className='w-68 mt-2 mb-6 opacity-60' src={img} alt="" />
            </div>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {/* {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                } */}
                {
                    chefs.map(chef => <TeamCard
                        key={chef._id}
                        chef={chef}
                    ></TeamCard>)
                }
            </div>
        </div>
    );
};

export default Team;