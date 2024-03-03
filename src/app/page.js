import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import ColoredShapes from './ColoredShapes';
import Hero from '../components/Hero/Hero';
import SliderContent from '../components/Banners/SliderContent';
import GlassMorphismCard from "../components/Hero/GlassMorphismCard" 
import ThirdFram from "../components/ThirdFram/ThirdFram"
import '../styles/styles.css';
import FouthFram from '@/components/FourthFram/FouthFram';
import Footer from '../components/Footer/Footer';

const Page = () => {
  return (
    <>
    <section className="glass-morphism-bg">
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <ColoredShapes  />

        <div className="mb-5 grid grid-cols-1 gap-8 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          {/* Your grid content goes here */}
        </div>

        {/* Add top margin to Hero */}
        <Hero  />

        {/* Add top margin to SliderContent */}
        <SliderContent />
        
      </main>
      
    </section>
    <section>
       <GlassMorphismCard/> 
    </section>
    <ThirdFram/>
    <FouthFram/>
    <Footer/>
    </>
  );
};

export default Page;