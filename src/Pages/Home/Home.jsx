import React from 'react';
import Banner from './Banner/Banner';
import About from './About/About';
import Service from './Service/Service';

const Home = () => {
    return (
        <div>
<div className='max-w-7xl mx-auto mt-5'>
<Banner></Banner>
<About></About>
<Service></Service>
</div>
        </div>
    );
};

export default Home;