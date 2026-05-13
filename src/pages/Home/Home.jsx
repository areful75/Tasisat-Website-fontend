import React from 'react';
import Banner from './Banner';
import StatsSection from '../../components/StatSection';
import ServicesSection from '../../components/ServicesSection';
import AboutSection from '../../components/AboutSection';
import TeamSection from '../../components/TeamSection';
import FAQSection from '../../components/FAQSection';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <StatsSection></StatsSection>
            <ServicesSection></ServicesSection>
            <AboutSection></AboutSection>
            <TeamSection></TeamSection>
            <FAQSection></FAQSection>
            
            
        </div>
    );
};

export default Home;