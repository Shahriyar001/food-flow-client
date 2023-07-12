import React, { useEffect, useState } from 'react';
import img from "../../../assets/images/underline1.png";
import ServiceCard from './ServiceCard';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)

    return (
        <div className='mt-10 ml-16'>
            <div>
                <p className='text-xl italic my-2 text-red-600 font-semibold'>Our Services</p>
                <h1 className='text-3xl my-2 font-bold'>WHAT WE OFFER</h1>
                <img className='w-80 mt-2 mb-6 opacity-60' src={img} alt="" />
            </div>
            <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;