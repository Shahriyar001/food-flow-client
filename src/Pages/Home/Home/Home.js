import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import SpecialRacipe from '../SpecialRacipe/SpecialRacipe';
import Services from '../Services/Services';
import Team from '../Team/Team';
import Reservation from '../Reservation/Reservation';
import DishOfTWeek from '../DishOfTWeek/DishOfTWeek';
import Testimonial from '../Testimonial/Testimonial';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <SpecialRacipe></SpecialRacipe>
            <Services></Services>
            <Team></Team>
            <Reservation></Reservation>
            <DishOfTWeek></DishOfTWeek>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;