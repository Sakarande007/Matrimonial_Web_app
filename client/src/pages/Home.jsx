import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Search from '../components/Search';
import Members from '../components/Members';
import Plans from '../components/Plans';
import Stories from '../components/Stories';
import Contact from '../components/Contact';

const Home = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <Search />
            <Members />
            <Plans />
            <Stories />
            <Contact />
        </>
    );
};

export default Home;
