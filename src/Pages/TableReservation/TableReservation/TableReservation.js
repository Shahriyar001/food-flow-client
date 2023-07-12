import React, { useState } from 'react';
import ReservationBanner from '../ReservationBanner/ReservationBanner';
import VideoandCalander from '../VideoandCalander/VideoandCalander';
import AvailableTable from '../AvailableTable/AvailableTable';

const TableReservation = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <ReservationBanner></ReservationBanner>
            <VideoandCalander
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></VideoandCalander>
            <AvailableTable
                selectedDate={selectedDate}></AvailableTable>
        </div>
    );
};

export default TableReservation;