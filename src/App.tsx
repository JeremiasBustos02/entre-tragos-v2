import AboutSection from './app/components/AboutSection';
import CocktailShowcase from './app/components/CocktailShowcase';
import ContactForm from './app/components/ContactForm';
import CtaSection from './app/components/CtaSection';
import FaqSection from './app/components/FaqSection';
import FloatingWhatsApp from './app/components/FloatingWhatsApp';
import Footer from './app/components/Footer';
import GallerySection from './app/components/GallerySection';
import HeroSection from './app/components/HeroSection';
import Marquee from './app/components/Marquee';
import Navbar from './app/components/Navbar';
import ServicesTray from './app/components/ServicesTray';

function App() {
  return (
    <div className="relative min-h-screen w-full bg-[#F9F7F4] font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <div className="flex justify-center px-3 sm:px-4 pb-12 sm:pb-16">
          <ServicesTray />
        </div>
        <CocktailShowcase />

        <Marquee
          items={[
            'Barras Móviles',
            'Coctelería',
            'Eventos Exclusivos',
            'Casamientos',
            'Cumpleaños',
            'Eventos Corporativos',
          ]}
        />

        <AboutSection />

        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4 px-4 opacity-60">
          <div className="h-[1px] flex-1 bg-[#4B4139]/20" />
          <span className="font-serif italic text-xl text-[#4B4139] tracking-wide text-center whitespace-nowrap">
            "Cada evento merece una barra inolvidable"
          </span>
          <div className="h-[1px] flex-1 bg-[#4B4139]/20" />
        </div>
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
