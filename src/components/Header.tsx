import React from 'react';
import { Settings, Minus, X, Link, Home, Server, Newspaper, Users, Sun, Moon, User } from 'lucide-react';
import { RobloxUser } from '../App';

interface HeaderProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
  isDarkTheme: boolean;
  onThemeChange: (isDark: boolean) => void;
  user: RobloxUser | null;
  onLoginClick: () => void;
}

export function Header({ currentSection, onSectionChange, isDarkTheme, onThemeChange, user, onLoginClick }: HeaderProps) {
  const navItems = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'servers', label: 'Serveurs', icon: Server },
    { id: 'news', label: 'Actualités', icon: Newspaper },
    { id: 'community', label: 'Communauté', icon: Users },
  ];

  const bgClass = isDarkTheme 
    ? 'bg-gray-900/95 backdrop-blur-sm border-b border-gray-800' 
    : 'bg-white/90 backdrop-blur-sm border-b border-gray-200';

  const textClass = isDarkTheme ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = isDarkTheme ? 'text-gray-400' : 'text-gray-600';

  return (
    <header className={`${bgClass} px-6 py-4 flex items-center justify-between`}>
      {/* Logo */}
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">F</span>
        </div>
        <span className={`${textClass} font-bold text-xl`}>ForeM</span>
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-600 shadow-lg border border-red-500/30'
                  : `${textSecondaryClass} hover:${textClass} hover:${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-100/50'}`
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
        {/* Theme Toggle */}
        <button
          onClick={() => onThemeChange(!isDarkTheme)}
          className={`p-2 rounded-lg transition-all duration-200 ${
            isDarkTheme 
              ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
          }`}
        >
          {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* User Section */}
        {user ? (
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <img 
                src={user.avatar} 
                alt={user.displayName}
                className="w-8 h-8 rounded-full border-2 border-red-500"
              />
              <span className={`${textClass} font-medium`}>{user.displayName}</span>
            </div>
          </div>
        ) : (
          <button 
            onClick={onLoginClick}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 flex items-center space-x-2"
          >
            <Link size={16} />
            <span>Connexion Roblox</span>
          </button>
        )}
        
        <button
          onClick={() => onSectionChange('settings')}
          className={`p-2 rounded-lg transition-all duration-200 ${
            currentSection === 'settings'
              ? `${isDarkTheme ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`
              : `${textSecondaryClass} hover:${textClass} hover:${isDarkTheme ? 'bg-gray-800' : 'bg-gray-100'}`
          }`}
        >
          <Settings size={20} />
        </button>
        
        <div className={`flex items-center space-x-2 ml-4 border-l ${isDarkTheme ? 'border-gray-700' : 'border-gray-300'} pl-4`}>
          <button className={`${textSecondaryClass} hover:${textClass} p-1 rounded transition-colors`}>
            <Minus size={16} />
          </button>
          <button className={`${textSecondaryClass} hover:text-red-400 p-1 rounded transition-colors`}>
            <X size={16} />
          </button>
        </div>
      </div>
    </header>
  );
}