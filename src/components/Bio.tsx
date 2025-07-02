import React from 'react';
import { Award, Users, Coffee } from 'lucide-react';

const Bio: React.FC = () => {
  const achievements = [
    { icon: Award, text: 'Award-winning design excellence' },
    { icon: Users, text: '100+ satisfied clients worldwide' },
    { icon: Coffee, text: '5+ years of creative expertise' }
  ];

  return (
    <section id="bio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="animate-fade-in-left">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3778680/pexels-photo-3778680.jpeg"
                  alt="Professional headshot"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#707070] rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">FS</span>
              </div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="animate-fade-in-right">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] mb-6">
              Passionate About
              <span className="block text-[#707070]">Creative Excellence</span>
            </h2>
            
            <p className="text-[#4A4A4A] text-lg leading-relaxed mb-8">
              With over five years in the creative industry, I specialize in transforming complex 
              ideas into elegant digital solutions. My expertise spans web design, brand identity, 
              and user experience design, always focusing on creating meaningful connections between 
              brands and their audiences. Every project is an opportunity to push creative boundaries 
              while delivering exceptional results that exceed client expectations. I believe in the 
              power of thoughtful design to solve real-world problems and create lasting impact.
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-full flex items-center justify-center group-hover:bg-[#707070] transition-colors duration-300">
                    <achievement.icon className="w-6 h-6 text-[#707070] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-[#2A2A2A] font-medium">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bio;