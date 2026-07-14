import './index.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import PredictionForm from './components/PredictionForm';
import Footer from './components/Footer';

import useScrollReveal from './hooks/useScrollReveal';

function App() {

  useScrollReveal();

  return (

    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(135deg, #FFE4A0 0%, #FFA733 50%, #FF6B00 100%)',
        overflowX: 'hidden'
      }}
    >

      <Navbar />

      <div className="reveal">
        <HeroSection />
      </div>

      <div className="reveal">
        <StatsBar />
      </div>

      <div className="reveal">
        <HowItWorks />
      </div>

      <div className="reveal">
        <Features />
      </div>

      <div className="reveal">
        <PredictionForm />
      </div>

      <div className="reveal">
        <Footer />
      </div>

    </div>
  );
}

export default App;