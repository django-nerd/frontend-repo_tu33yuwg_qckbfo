import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import { AskSection, AdventureSection, HoaxSection } from './components/Sections';

function App() {
  return (
    <div className="font-sans text-orange-900">
      <Navbar />
      <Hero />
      <Features />
      <AskSection />
      <AdventureSection />
      <HoaxSection />
      <footer className="bg-white border-t border-orange-100 py-8 mt-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-orange-700/80">
          <div className="flex items-center gap-2">
            <img src="https://cdn.jsdelivr.net/gh/hkokee/assets@main/redpanda-shai.png" className="w-6 h-6 rounded-full" alt="Shai"/>
            <span>Shai — AI Guardian untuk Anak</span>
          </div>
          <p>Made with ❤️ untuk keamanan digital yang ceria.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
