import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-[#F5F5F5] to-white"
    >
      <div className="max-w-4xl mx-auto px-4 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2A2A2A] leading-tight mb-6">
          <span className="block">Crafting Digital</span>
          <span className="block text-[#707070]">Experiences</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#4A4A4A] mb-8 max-w-2xl mx-auto font-medium">
          Transforming creative visions into stunning digital realities through innovative design and development.
        </p>
        
        <button
          onClick={scrollToProjects}
          className="inline-flex items-center space-x-2 bg-[#2A2A2A] text-white px-8 py-4 rounded-full hover:bg-[#4A4A4A] transition-all duration-300 transform hover:scale-105 font-medium min-h-[48px] shadow-lg hover:shadow-xl"
        >
          <span>View My Work</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#707070] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#707070] rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;