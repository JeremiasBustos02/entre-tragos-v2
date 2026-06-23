import { useState } from 'react';
import AboutSection from './app/components/AboutSection';
import CocktailShowcase from './app/components/CocktailShowcase';
import ContactForm from './app/components/ContactForm';
import CtaSection from './app/components/CtaSection';
import FaqSection from './app/components/FaqSection';
import FloatingWhatsApp from './app/components/FloatingWhatsApp';
import Footer from './app/components/Footer';
import GallerySection from './app/components/GallerySection';
import HeroSection from './app/components/HeroSection';
import IdealForSection from './app/components/IdealForSection';
import Marquee from './app/components/Marquee';
import Navbar from './app/components/Navbar';
import Preloader from './app/components/Preloader';
import SectionDivider from './app/components/SectionDivider';
import ServiceInclusions from './app/components/ServiceInclusions';
import ServicesTray from './app/components/ServicesTray';
import TrustSignals from './app/components/TrustSignals';

const PRELOADER_KEY = 'entre-tragos-preloader-done';

function App() {
  const [preloaderDone, setPreloaderDone] = useState(() => {
    return sessionStorage.getItem(PRELOADER_KEY) === 'true';
  });
  const [landingVisible, setLandingVisible] = useState(() => {
    return sessionStorage.getItem(PRELOADER_KEY) === 'true';
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem(PRELOADER_KEY, 'true');
    setPreloaderDone(true);
  };

  return (
    <div className="relative min-h-screen w-full font-sans" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div
        style={{
          opacity: landingVisible ? 1 : 0,
          transition: 'opacity 700ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Navbar />
        <main>
          <HeroSection />
          <ServicesTray />
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

          <IdealForSection />
          <SectionDivider variant="curve" />
          <AboutSection />
          <TrustSignals />
          <ServiceInclusions />
          <SectionDivider variant="line" />
          <GallerySection />
          <CtaSection />
          <FaqSection />
          <ContactForm />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>

      {!preloaderDone && (
        <Preloader
          onZoomStart={() => setLandingVisible(true)}
          onComplete={handlePreloaderComplete}
        />
      )}
    </div>
  );
}

export default App;
