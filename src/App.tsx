import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { ServersSection } from './components/ServersSection';
import { NewsSection } from './components/NewsSection';
import { CommunitySection } from './components/CommunitySection';
import { SettingsSection } from './components/SettingsSection';
import { LoginModal } from './components/LoginModal';

export interface RobloxUser {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  isVerified: boolean;
}

export interface RobloxGame {
  id: string;
  name: string;
  description: string;
  players: number;
  maxPlayers: number;
  creator: string;
  tags: string[];
  image: string;
  banner: string;
  rating: number;
  visits: number;
  featured?: boolean;
  lastPlayed?: Date;
  details: {
    genre: string;
    created: string;
    updated: string;
    maxServers: number;
    language: string;
    allowedGear: string[];
    description: string;
    features: string[];
  };
}

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [user, setUser] = useState<RobloxUser | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [lastPlayedGame, setLastPlayedGame] = useState<RobloxGame | null>(null);

  // Simuler la connexion automatique Roblox
  useEffect(() => {
    const checkRobloxLogin = async () => {
      // Simuler une vérification de session Roblox
      setTimeout(() => {
        const mockUser: RobloxUser = {
          id: '123456789',
          username: 'PlayerPro2024',
          displayName: 'Player Pro',
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
          isVerified: true
        };
        setUser(mockUser);
      }, 1000);
    };

    checkRobloxLogin();
  }, []);

  const handleGamePlay = (game: RobloxGame) => {
    const updatedGame = { ...game, lastPlayed: new Date() };
    setLastPlayedGame(updatedGame);
    // Ici on lancerait le jeu via Roblox
    console.log('Lancement du jeu:', game.name);
  };

  const renderCurrentSection = () => {
    const props = {
      isDarkTheme,
      user,
      lastPlayedGame,
      onGamePlay: handleGamePlay
    };

    switch (currentSection) {
      case 'home':
        return <HomeSection {...props} />;
      case 'servers':
        return <ServersSection {...props} />;
      case 'news':
        return <NewsSection {...props} />;
      case 'community':
        return <CommunitySection {...props} />;
      case 'settings':
        return <SettingsSection {...props} isDarkTheme={isDarkTheme} onThemeChange={setIsDarkTheme} />;
      default:
        return <HomeSection {...props} />;
    }
  };

  const themeClasses = isDarkTheme 
    ? 'bg-gray-900'
    : 'bg-gradient-to-br from-gray-50 via-white to-red-50';

  return (
    <div className={`min-h-screen ${themeClasses} transition-all duration-500`}>
      {/* Background pattern */}
      <div className="fixed inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: isDarkTheme 
            ? 'radial-gradient(circle at 25% 25%, #1f2937 0%, transparent 50%), radial-gradient(circle at 75% 75%, #374151 0%, transparent 50%)'
            : 'radial-gradient(circle at 25% 25%, #fca5a5 0%, transparent 50%), radial-gradient(circle at 75% 75%, #f87171 0%, transparent 50%)',
        }} />
      </div>
      
      <div className="relative z-10 h-screen flex flex-col">
        <Header 
          currentSection={currentSection} 
          onSectionChange={setCurrentSection}
          isDarkTheme={isDarkTheme}
          onThemeChange={setIsDarkTheme}
          user={user}
          onLoginClick={() => setShowLoginModal(true)}
        />
        <main className="flex-1 overflow-hidden">
          {renderCurrentSection()}
        </main>
      </div>

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLogin={setUser}
          isDarkTheme={isDarkTheme}
        />
      )}
    </div>
  );
}

export default App;