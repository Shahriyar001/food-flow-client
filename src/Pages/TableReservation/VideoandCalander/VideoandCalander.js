import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const VideoandCalander = ({ selectedDate, setSelectedDate }) => {

    return (
        <div className="hero my-10 py-10 bg-base-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <div className='grid place-items-center w-full'>
                        <iframe
                            className='w-9/15'
                            width="510"
                            height="285"
                            src="https://www.youtube.com/embed/C3psWoyNzJ4"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className='lg:w-1/2 mr-10'>
                    <DayPicker
                        mode='single'
                        selected={selectedDate}
                        onSelect={setSelectedDate}
                    />

                </div>
            </div>
        </div>
    );
};

export default VideoandCalander;