import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Services from './components/Services';
import Conditions from './components/Conditions';
import Campaigns from './components/Campaigns';
import Doctor from './components/Doctor';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Specialties />
      <Services />
      <Conditions />
      <Campaigns />
      <Doctor />
      <Contact />
      <MapSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
