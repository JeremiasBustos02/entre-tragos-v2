import AboutSection from './app/components/AboutSection';
import ContactForm from './app/components/ContactForm';
import Footer from './app/components/Footer';
import GallerySection from './app/components/GallerySection';
import HeroSection from './app/components/HeroSection';
import Navbar from './app/components/Navbar';
import ServicesTray from './app/components/ServicesTray';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] p-3 sm:p-4 font-sans">
      <Navbar />
      <HeroSection />
      <main className="flex justify-center px-3 sm:px-4 pb-12 sm:pb-16">
        <ServicesTray />
      </main>
      <AboutSection />
      <GallerySection />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
