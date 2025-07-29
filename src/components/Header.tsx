import React from 'react';
import { Settings, Minus, X, Link, Home, Server, Newspaper, Users } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

export function Header({ currentSection, onSectionChange }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'servers', label: 'Serveurs', icon: Server },
    { id: 'news', label: 'Actualités', icon: Newspaper },
    { id: 'community', label: 'Communauté', icon: Users },
  ];

  return (
    <header className="bg-black/90 backdrop-blur-sm border-b border-gray-800 px-6 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">R</span>
        </div>
        <span className="text-white font-bold text-xl">RoboM</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                currentSection === item.id
                  ? 'bg-gradient-to-r from-blue-500/20 to-green-500/20 text-white shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Utility Buttons */}
      <div className="flex items-center space-x-3">
        <button className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 flex items-center space-x-2">
          <Link size={16} />
          <span>Lier Compte</span>
        </button>
        
        <button
          onClick={() => onSectionChange('settings')}
          className={`p-2 rounded-lg transition-all duration-200 ${
            currentSection === 'settings'
              ? 'bg-gray-700 text-white'
              : 'text-gray-400 hover:text-white hover:bg-gray-800'
          }`}
        >
          <Settings size={20} className="animate-pulse" />
        </button>
        
        <div className="flex items-center space-x-2 ml-4 border-l border-gray-700 pl-4">
          <button className="text-gray-400 hover:text-white p-1 rounded transition-colors">
            <Minus size={16} />
          </button>
          <button className="text-gray-400 hover:text-red-400 p-1 rounded transition-colors">
            <X size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}