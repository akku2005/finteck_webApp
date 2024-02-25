import React from 'react';
import Navbar from '@/pages/Navbar';
import ColoredShapes from './ColoredShapes';
import Hero from '../components/Hero/Hero';
import SliderContent from '../components/Banners/SliderContent';
import GlassMorphismCard from "../components/Hero/GlassMorphismCard"
import '../styles/styles.css';

const Page = () => {
  return (
    <>
    <section className="glass-morphism-bg">
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />

        {/* Add top margin to ColoredShapes */}
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
    <GlassMorphismCard/>
    </>
  );
};

export default Page;
