import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Volume2, Monitor, Code, Globe, Palette, Bell, RotateCcw, LogOut, Sun, Moon } from 'lucide-react';
import { RobloxUser } from '../App';

interface SettingsSectionProps {
  isDarkTheme: boolean;
  onThemeChange: (isDark: boolean) => void;
  user: RobloxUser | null;
}

export function SettingsSection({ isDarkTheme, onThemeChange, user }: SettingsSectionProps) {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'Général', icon: SettingsIcon },
    { id: 'interface', label: 'Interface', icon: Monitor },
    { id: 'audio', label: 'Audio', icon: Volume2 },
    { id: 'account', label: 'Compte', icon: User },
    { id: 'advanced', label: 'Avancé', icon: Code }
  ];

  const cardBg = isDarkTheme 
    ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50'
    : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg';
  
  const textClass = isDarkTheme ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = isDarkTheme ? 'text-gray-400' : 'text-gray-600';
  const inputBg = isDarkTheme ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300';

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <label className={`block ${textClass} font-medium mb-3`}>
                <Globe className="inline mr-2" size={16} />
                Langue
              </label>
              <select className={`w-full ${inputBg} border rounded-lg px-4 py-3 ${textClass} focus:outline-none focus:border-red-500`}>
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

            <div>
              <label className={`block ${textClass} font-medium mb-3`}>
                <Palette className="inline mr-2" size={16} />
                Thème
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => onThemeChange(false)}
                  className={`${!isDarkTheme ? 'border-2 border-red-500 bg-red-50' : `border ${isDarkTheme ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-gray-100'}`} rounded-lg p-4 ${textClass} font-medium transition-all duration-200 flex items-center justify-center space-x-2`}
                >
                  <Sun size={18} />
                  <span>Clair</span>
                </button>
                <button 
                  onClick={() => onThemeChange(true)}
                  className={`${isDarkTheme ? 'border-2 border-red-500 bg-red-900/20' : `border ${isDarkTheme ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-gray-100'}`} rounded-lg p-4 ${textClass} font-medium transition-all duration-200 flex items-center justify-center space-x-2`}
                >
                  <Moon size={18} />
                  <span>Sombre</span>
                </button>
              </div>
            </div>

            <div>
              <label className={`flex items-center justify-between ${textClass} font-medium`}>
                <span>
                  <Bell className="inline mr-2" size={16} />
                  Notifications
                </span>
                <input type="checkbox" defaultChecked className="toggle-checkbox" />
              </label>
              <p className={`${textSecondaryClass} text-sm mt-2`}>Recevoir des notifications pour les mises à jour et événements</p>
            </div>
          </div>
        );

      case 'interface':
        return (
          <div className="space-y-6">
            <div>
              <label className={`block ${textClass} font-medium mb-3`}>Taille du texte</label>
              <select className={`w-full ${inputBg} border rounded-lg px-4 py-3 ${textClass} focus:outline-none focus:border-red-500`}>
                <option value="small">Petit</option>
                <option value="medium">Moyen</option>
                <option value="large">Grand</option>
              </select>
            </div>

            <div>
              <label className={`flex items-center justify-between ${textClass} font-medium`}>
                <span>Animations activées</span>
                <input type="checkbox" defaultChecked className="toggle-checkbox" />
              </label>
              <p className={`${textSecondaryClass} text-sm mt-2`}>Activer les animations et transitions fluides</p>
            </div>

            <div>
              <label className={`block ${textClass} font-medium mb-3`}>Mode d'affichage</label>
              <div className="grid grid-cols-2 gap-3">
                <button className={`${isDarkTheme ? 'bg-gray-900 border-2 border-red-500' : 'bg-red-50 border-2 border-red-500'} rounded-lg p-4 ${textClass} font-medium`}>
                  Étendu
                </button>
                <button className={`${inputBg} border rounded-lg p-4 ${textSecondaryClass}`}>
                  Compact
                </button>
              </div>
            </div>
          </div>
        );

      case 'audio':
        return (
          <div className="space-y-6">
            <div>
              <label className={`block ${textClass} font-medium mb-3`}>Volume musique</label>
              <input type="range" min="0" max="100" defaultValue="75" className="w-full slider" />
              <div className={`flex justify-between text-sm ${textSecondaryClass} mt-1`}>
                <span>0%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>

            <div>
              <label className={`block ${textClass} font-medium mb-3`}>Volume effets sonores</label>
              <input type="range" min="0" max="100" defaultValue="50" className="w-full slider" />
              <div className={`flex justify-between text-sm ${textSecondaryClass} mt-1`}>
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            <div>
              <label className={`flex items-center justify-between ${textClass} font-medium`}>
                <span>Sons de l'interface</span>
                <input type="checkbox" defaultChecked className="toggle-checkbox" />
              </label>
              <p className={`${textSecondaryClass} text-sm mt-2`}>Sons lors des interactions avec l'interface</p>
            </div>
          </div>
        );

      case 'account':
        return (
          <div className="space-y-6">
            {user && (
              <div className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-lg p-6`}>
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={user.avatar} 
                    alt={user.displayName}
                    className="w-16 h-16 rounded-full border-2 border-red-500"
                  />
                  <div>
                    <h3 className={`${textClass} font-semibold text-lg`}>{user.displayName}</h3>
                    <p className={textSecondaryClass}>@{user.username}</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors">
                    Modifier le profil
                  </button>
                  <button className={`flex-1 ${isDarkTheme ? 'bg-gray-700' : 'bg-gray-200'} ${textClass} py-2 px-4 rounded-lg font-medium hover:${isDarkTheme ? 'bg-gray-600' : 'bg-gray-300'} transition-colors`}>
                    Paramètres Roblox
                  </button>
                </div>
              </div>
            )}

            <div>
              <h4 className={`${textClass} font-medium mb-3`}>Compte lié</h4>
              <div className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-lg p-4 flex items-center justify-between`}>
                <span className={textClass}>Roblox</span>
                <button className="text-red-500 hover:text-red-400 transition-colors">
                  Délier
                </button>
              </div>
            </div>

            <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
              <LogOut size={16} />
              <span>Déconnexion</span>
            </button>
          </div>
        );

      case 'advanced':
        return (
          <div className="space-y-6">
            <div>
              <label className={`flex items-center justify-between ${textClass} font-medium`}>
                <span>Options développeur</span>
                <input type="checkbox" className="toggle-checkbox" />
              </label>
              <p className={`${textSecondaryClass} text-sm mt-2`}>Activer les outils de développement et le mode debug</p>
            </div>

            <div>
              <label className={`flex items-center justify-between ${textClass} font-medium`}>
                <span>Logs serveur</span>
                <input type="checkbox" className="toggle-checkbox" />
              </label>
              <p className={`${textSecondaryClass} text-sm mt-2`}>Afficher les logs détaillés des serveurs</p>
            </div>

            <div className={`border-t ${isDarkTheme ? 'border-gray-700' : 'border-gray-300'} pt-6`}>
              <h4 className="text-red-500 font-medium mb-4">Zone de danger</h4>
              <button className="w-full bg-red-600/20 border border-red-600/50 text-red-500 py-3 px-4 rounded-lg font-medium hover:bg-red-600/30 transition-colors flex items-center justify-center space-x-2">
                <RotateCcw size={16} />
                <span>Réinitialiser ForeM</span>
              </button>
              <p className={`${textSecondaryClass} text-sm mt-2`}>Cette action supprimera tous vos paramètres et données locales</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="h-full overflow-hidden p-6">
      <h1 className={`text-3xl font-bold ${textClass} mb-6`}>Paramètres</h1>
      
      <div className="h-full flex gap-6">
        {/* Tabs Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className={`${cardBg} rounded-xl p-2 space-y-1`}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-red-500/20 to-red-600/20 text-red-600 border border-red-500/30'
                      : `${textSecondaryClass} hover:${textClass} hover:${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-100/50'}`
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className={`${cardBg} rounded-xl p-8 h-full`}>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}