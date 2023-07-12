import React from 'react';
import img from "../../../assets/images/underline1.png";
import ReviewCard from './ReviewCard';


const Testimonial = () => {
    const cardData = [
        {
            id: 1,
            name: 'John Duo',
            add: 'Dhaka, Bangladesh',
            description: ' This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority. Food is pretty good, some italian classics and some twists, and for their prices it’s 100% worth it..',
            icon: null,
            bgClass: 'bg-red-400'
        },
        {
            id: 2,
            name: 'Ben Josef',
            add: 'Khulna, Bangladesh',
            description: 'Excellent food. Menu is extensive and seasonal to a particularly high standard. Definitely fine dining. It can be expensive but worth it and they do different deals on different nights so it’s worth checking them out before you book. Highly recommended. ',
            icon: null,
            bgClass: 'bg-red-400'
        }

    ]
    return (
        <div className='mt-10 ml-16'>
            <div>
                <p className='text-xl italic my-2 text-red-600 font-semibold'>Testimonials</p>
                <h1 className='text-3xl my-2 font-bold'>WHAT CLIENT SAY</h1>
                <img className='w-80 mt-2 mb-6 opacity-60' src={img} alt="" />
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
                {
                    cardData.map(card => <ReviewCard
                        key={card.id}
                        card={card}
                    ></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;