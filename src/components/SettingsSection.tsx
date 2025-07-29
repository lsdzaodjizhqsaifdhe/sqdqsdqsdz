import React, { useState } from 'react';
import { Settings as SettingsIcon, User, Volume2, Monitor, Code, Globe, Palette, Bell, RotateCcw, LogOut } from 'lucide-react';

export function SettingsSection() {
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: 'Général', icon: SettingsIcon },
    { id: 'interface', label: 'Interface', icon: Monitor },
    { id: 'audio', label: 'Audio', icon: Volume2 },
    { id: 'account', label: 'Compte', icon: User },
    { id: 'advanced', label: 'Avancé', icon: Code }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-3">
                <Globe className="inline mr-2" size={16} />
                Langue
              </label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="es">Español</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-medium mb-3">
                <Palette className="inline mr-2" size={16} />
                Thème
              </label>
              <div className="grid grid-cols-3 gap-3">
                <button className="bg-gray-900 border-2 border-blue-500 rounded-lg p-4 text-white font-medium">
                  Sombre
                </button>
                <button className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-gray-400">
                  Foncé
                </button>
                <button className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-gray-400">
                  Minuit
                </button>
              </div>
            </div>

            <div>
              <label className="flex items-center justify-between text-white font-medium">
                <span>
                  <Bell className="inline mr-2" size={16} />
                  Notifications
                </span>
                <input type="checkbox" defaultChecked className="toggle-checkbox" />
              </label>
              <p className="text-gray-400 text-sm mt-2">Recevoir des notifications pour les mises à jour et événements</p>
            </div>
          </div>
        );

      case 'interface':
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-3">Taille du texte</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500">
                <option value="small">Petit</option>
                <option value="medium" selected>Moyen</option>
                <option value="large">Grand</option>
              </select>
            </div>

            <div>
              <label className="flex items-center justify-between text-white font-medium">
                <span>Animations activées</span>
                <input type="checkbox" defaultChecked className="toggle-checkbox" />
              </label>
              <p className="text-gray-400 text-sm mt-2">Activer les animations et transitions fluides</p>
            </div>

            <div>
              <label className="block text-white font-medium mb-3">Mode d'affichage</label>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-gray-900 border-2 border-blue-500 rounded-lg p-4 text-white font-medium">
                  Étendu
                </button>
                <button className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-gray-400">
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
              <label className="block text-white font-medium mb-3">Volume musique</label>
              <input type="range" min="0" max="100" defaultValue="75" className="w-full slider" />
              <div className="flex justify-between text-sm text-gray-400 mt-1">
                <span>0%</span>
                <span>75%</span>
                <span>100%</span>
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-3">Volume effets sonores</label>
              <input type="range" min="0" max="100" defaultValue="50" className="w-full slider" />
              <div className="flex justify-between text-sm text-gray-400 mt-1">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>

            <div>
              <label className="flex items-center justify-between text-white font-medium">
                <span>Sons de l'interface</span>
                <input type="checkbox" defaultChecked className="toggle-checkbox" />
              </label>
              <p className="text-gray-400 text-sm mt-2">Sons lors des interactions avec l'interface</p>
            </div>
          </div>
        );

      case 'account':
        return (
          <div className="space-y-6">
            <div className="bg-gray-800/50 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg">John Doe</h3>
                  <p className="text-gray-400">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Modifier le profil
                </button>
                <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-600 transition-colors">
                  Changer le mot de passe
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-3">Compte lié</h4>
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-between">
                <span className="text-gray-300">Discord</span>
                <button className="text-red-400 hover:text-red-300 transition-colors">
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
              <label className="flex items-center justify-between text-white font-medium">
                <span>Options développeur</span>
                <input type="checkbox" className="toggle-checkbox" />
              </label>
              <p className="text-gray-400 text-sm mt-2">Activer les outils de développement et le mode debug</p>
            </div>

            <div>
              <label className="flex items-center justify-between text-white font-medium">
                <span>Logs serveur</span>
                <input type="checkbox" className="toggle-checkbox" />
              </label>
              <p className="text-gray-400 text-sm mt-2">Afficher les logs détaillés des serveurs</p>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <h4 className="text-white font-medium mb-4 text-red-400">Zone de danger</h4>
              <button className="w-full bg-red-600/20 border border-red-600/50 text-red-400 py-3 px-4 rounded-lg font-medium hover:bg-red-600/30 transition-colors flex items-center justify-center space-x-2">
                <RotateCcw size={16} />
                <span>Réinitialiser le launcher</span>
              </button>
              <p className="text-gray-500 text-sm mt-2">Cette action supprimera tous vos paramètres et données locales</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Paramètres</h1>
      
      <div className="flex gap-8">
        {/* Tabs Sidebar */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-2 space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
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
        <div className="flex-1">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}