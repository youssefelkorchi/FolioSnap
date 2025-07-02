import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectGrid: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      description: 'Modern e-commerce solution with seamless user experience'
    },
    {
      id: 2,
      title: 'Brand Identity System',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      description: 'Complete brand identity for luxury lifestyle brand'
    },
    {
      id: 3,
      title: 'Mobile App Design',
      category: 'UI/UX',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg',
      description: 'Intuitive mobile app for fitness tracking and wellness'
    },
    {
      id: 4,
      title: 'Corporate Website',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg',
      description: 'Professional corporate website with advanced functionality'
    },
    {
      id: 5,
      title: 'Art Exhibition Portal',
      category: 'Creative Direction',
      image: 'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg',
      description: 'Interactive digital gallery showcasing contemporary art'
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      category: 'Product Design',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg',
      description: 'Comprehensive analytics dashboard for business intelligence'
    },
    {
      id: 7,
      title: 'Fashion Campaign',
      category: 'Photography',
      image: 'https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg',
      description: 'Creative direction for high-end fashion photography'
    },
    {
      id: 8,
      title: 'Restaurant Branding',
      category: 'Brand Strategy',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg',
      description: 'Complete brand overhaul for premium dining experience'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#F5F5F5]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2A2A] mb-4">
            Featured Projects
          </h2>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">
            A curated selection of my finest work, showcasing creativity, 
            technical excellence, and results that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`relative group cursor-pointer animate-fade-in-up rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-102 ${
                index % 3 === 1 ? 'md:mt-8' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div 
                className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200 mb-2">{project.category}</p>
                  <p className="text-sm mb-4 opacity-90">{project.description}</p>
                  
                  <div className="flex space-x-3">
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <Eye className="w-5 h-5" />
                    </button>
                    <button className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300">
                      <ExternalLink className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Bottom overlay for title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;