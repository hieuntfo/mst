import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StrategicTopics from './components/StrategicTopics';
import PublicServices from './components/PublicServices';
import Engagement from './components/Engagement';
import MultimediaSection from './components/MultimediaSection';
import PartnersSection from './components/PartnersSection';
import Footer from './components/Footer';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <div className="bg-most-secondary-bg text-gray-800">
      <Header />
      <main>
        <HeroSection />
        <StrategicTopics />
        <PublicServices />
        <Engagement />
        <MultimediaSection />
        <PartnersSection />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}

export default App;