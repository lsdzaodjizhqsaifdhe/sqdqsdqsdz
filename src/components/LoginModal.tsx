import React, { useState } from 'react';
import { X, ExternalLink, Shield, CheckCircle } from 'lucide-react';
import { RobloxUser } from '../App';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (user: RobloxUser) => void;
  isDarkTheme: boolean;
}

export function LoginModal({ onClose, onLogin, isDarkTheme }: LoginModalProps) {
  const [isConnecting, setIsConnecting] = useState(false);

  const handleRobloxLogin = async () => {
    setIsConnecting(true);
    
    // Simuler la connexion Roblox
    setTimeout(() => {
      const mockUser: RobloxUser = {
        id: '123456789',
        username: 'PlayerPro2024',
        displayName: 'Player Pro',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        isVerified: true
      };
      
      onLogin(mockUser);
      setIsConnecting(false);
      onClose();
    }, 2000);
  };

  const bgClass = isDarkTheme 
    ? 'bg-gray-900/95 backdrop-blur-sm border border-gray-700' 
    : 'bg-white/95 backdrop-blur-sm border border-gray-200';
  
  const textClass = isDarkTheme ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = isDarkTheme ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`${bgClass} rounded-2xl p-8 max-w-md w-full shadow-2xl`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className={`${textClass} text-2xl font-bold`}>Connexion Roblox</h2>
          <button
            onClick={onClose}
            className={`${textSecondaryClass} hover:${textClass} p-1 rounded transition-colors`}
          >
            <X size={24} />
          </button>
        </div>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">R</span>
          </div>
          <p className={`${textSecondaryClass} mb-6`}>
            Connectez-vous avec votre compte Roblox pour accéder à toutes les fonctionnalités de ForeM
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-center space-x-3 text-sm">
              <CheckCircle className="text-green-500" size={16} />
              <span className={textSecondaryClass}>Synchronisation automatique des jeux</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <CheckCircle className="text-green-500" size={16} />
              <span className={textSecondaryClass}>Historique des parties</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <CheckCircle className="text-green-500" size={16} />
              <span className={textSecondaryClass}>Paramètres personnalisés</span>
            </div>
            <div className="flex items-center space-x-3 text-sm">
              <Shield className="text-blue-500" size={16} />
              <span className={textSecondaryClass}>Connexion sécurisée</span>
            </div>
          </div>

          <button
            onClick={handleRobloxLogin}
            disabled={isConnecting}
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-4 px-6 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            {isConnecting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Connexion en cours...</span>
              </>
            ) : (
              <>
                <ExternalLink size={20} />
                <span>Se connecter avec Roblox</span>
              </>
            )}
          </button>

          <p className={`${textSecondaryClass} text-xs mt-4`}>
            En vous connectant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
          </p>
        </div>
      </div>
    </div>
  );
}