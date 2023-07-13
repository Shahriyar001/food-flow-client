import React from 'react';

const Dashboard = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <img className='w-1/2' src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/4da3b327-9392-4860-81fe-7fb3a55a6167-oyster_loaf.jpg" alt='/' />
                <div className='lg:w-1/2'>
                    <h1 className="text-4xl my-3 font-bold"> Most popular dish!</h1>
                    <h1 className="text-xl font-bold">oyster loaf</h1>
                    <p className="py-6">In the late 1800s Americans became very good at harvesting oysters and by 1910 they cost half as much as beef. Eaten by rich and poor, they were used to bulk out meat dishes or served with alcohol, just like burgers and fries are today..</p>
                    <div>
                        <p>Pick Hour: 2-8 pm</p>
                        <p>Total sale 400+</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;