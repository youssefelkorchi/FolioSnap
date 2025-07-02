import Header from './components/Header';
import Hero from './components/Hero';
import Bio from './components/Bio';
import ProjectGrid from './components/ProjectGrid';
import ContactForm from './components/ContactForm';
import { useScrollAnimation } from './hooks/useScrollAnimation';

function App() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-inter">
      <Header />
      <main>
        <Hero />
        <Bio />
        <ProjectGrid />
        <ContactForm />
      </main>
      <footer className="bg-[#2A2A2A] text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm text-[#4A4A4A]">
            © 2025 FolioSnap. All rights reserved. Built with passion for creative excellence.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;