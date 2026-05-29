import AboutSection from './app/components/AboutSection';
import ContactForm from './app/components/ContactForm';
import CtaSection from './app/components/CtaSection';
import FaqSection from './app/components/FaqSection';
import FloatingWhatsApp from './app/components/FloatingWhatsApp';
import Footer from './app/components/Footer';
import GallerySection from './app/components/GallerySection';
import HeroSection from './app/components/HeroSection';
import Navbar from './app/components/Navbar';
import ServicesTray from './app/components/ServicesTray';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] p-3 sm:p-4 font-sans">
      <Navbar />
      <main className="pt-20">
        <HeroSection />
        <div className="flex justify-center px-3 sm:px-4 pb-12 sm:pb-16">
          <ServicesTray />
        </div>
        <AboutSection />
        <GallerySection />
        <CtaSection />
        <FaqSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
