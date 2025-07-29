import React, { useState } from 'react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ServersSection } from './components/ServersSection';
import { NewsSection } from './components/NewsSection';
import { CommunitySection } from './components/CommunitySection';
import { SettingsSection } from './components/SettingsSection';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection />;
      case 'servers':
        return <ServersSection />;
      case 'news':
        return <NewsSection />;
      case 'community':
        return <CommunitySection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900/20 via-black to-green-900/20">
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #10b981 0%, transparent 50%)',
        }} />
      </div>
      
      <div className="relative z-10">
        <Header currentSection={currentSection} onSectionChange={setCurrentSection} />
        <main className="min-h-[calc(100vh-80px)]">
          {renderCurrentSection()}
        </main>
      </div>
    </div>
  );
}

export default App;