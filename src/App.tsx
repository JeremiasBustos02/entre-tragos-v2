import HeroSection from './app/components/HeroSection';
import Navbar from './app/components/Navbar';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#FDFBF7] p-3 sm:p-4 font-sans">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
