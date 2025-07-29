import React from 'react';
import { Play, Clock, Star, Users, Heart, Trophy, Gamepad2 } from 'lucide-react';
import { RobloxGame, RobloxUser } from '../App';

interface HomeSectionProps {
  isDarkTheme: boolean;
  user: RobloxUser | null;
  lastPlayedGame: RobloxGame | null;
  onGamePlay: (game: RobloxGame) => void;
}

export function HomeSection({ isDarkTheme, user, lastPlayedGame, onGamePlay }: HomeSectionProps) {
  const topGames: RobloxGame[] = [
    {
      id: '2',
      name: 'Brookhaven RP',
      description: 'Vis ta vie dans une ville moderne !',
      players: 189432,
      maxPlayers: 999999,
      creator: 'Wolfpaq',
      tags: ['Roleplay', 'Ville', 'Social'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      banner: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.6,
      visits: 15200000000,
      details: {
        genre: 'Roleplay',
        created: '21 avril 2020',
        updated: 'Il y a 1 jour',
        maxServers: 12,
        language: 'Multilingue',
        allowedGear: ['Aucun équipement'],
        description: 'Bienvenue à Brookhaven, où tu peux être qui tu veux !',
        features: ['Ville entièrement explorable', 'Système de véhicules réaliste']
      }
    },
    {
      id: '3',
      name: 'Tower of Hell',
      description: 'Escalade la tour la plus difficile !',
      players: 156789,
      maxPlayers: 999999,
      creator: 'YXCeptional Studios',
      tags: ['Obby', 'Défi', 'Compétition'],
      image: 'https://images.pexels.com/photos/1666310/pexels-photo-1666310.jpeg?auto=compress&cs=tinysrgb&w=800',
      banner: 'https://images.pexels.com/photos/1666310/pexels-photo-1666310.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.7,
      visits: 9800000000,
      details: {
        genre: 'Obby/Parkour',
        created: '6 juin 2018',
        updated: 'Il y a 3 heures',
        maxServers: 20,
        language: 'Anglais',
        allowedGear: ['Aucun équipement'],
        description: 'Tower of Hell est un jeu d\'obby où les joueurs doivent escalader une tour.',
        features: ['Tours générées aléatoirement', 'Plus de 1000 sections différentes']
      }
    },
    {
      id: '4',
      name: 'Blox Fruits',
      description: 'Deviens le pirate le plus fort !',
      players: 298765,
      maxPlayers: 999999,
      creator: 'Gamer Robot Inc',
      tags: ['Action', 'Aventure', 'Anime'],
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
      banner: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.9,
      visits: 12400000000,
      featured: true,
      details: {
        genre: 'Action/Aventure',
        created: '17 janvier 2019',
        updated: 'Il y a 30 minutes',
        maxServers: 30,
        language: 'Anglais/Espagnol',
        allowedGear: ['Aucun équipement'],
        description: 'Inspiré de One Piece, Blox Fruits te permet de devenir un puissant utilisateur de fruit du démon.',
        features: ['Plus de 35 fruits du démon uniques', 'Système de combat avancé']
      }
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const cardBg = isDarkTheme 
    ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50'
    : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg';
  
  const textClass = isDarkTheme ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = isDarkTheme ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="h-full overflow-hidden p-6">
      <div className="h-full grid grid-cols-12 gap-6">
        {/* Section principale */}
        <div className="col-span-8 space-y-6">
          {/* Section Play */}
          <div className="text-center">
            <h1 className={`text-4xl font-bold ${textClass} mb-4`}>Prêt à jouer ?</h1>
            <button className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/30 hover:scale-105 flex items-center space-x-3 mx-auto">
              <Gamepad2 size={28} className="group-hover:scale-110 transition-transform" />
              <span>JOUER MAINTENANT</span>
            </button>
            <p className={`${textSecondaryClass} mt-4`}>Découvrir des millions d'expériences</p>
          </div>

          {/* Dernière expérience jouée */}
          {lastPlayedGame && (
            <div className={`${cardBg} rounded-2xl p-6`}>
              <h2 className={`${textClass} text-xl font-semibold mb-4 flex items-center space-x-2`}>
                <Clock size={20} className="text-red-500" />
                <span>Dernière expérience jouée</span>
              </h2>
              
              <div className={`${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-xl p-4 flex items-center space-x-4 hover:${isDarkTheme ? 'bg-gray-700/50' : 'bg-gray-100'} transition-all duration-200`}>
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <img src={lastPlayedGame.image} alt={lastPlayedGame.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1">
                  <h3 className={`${textClass} font-semibold text-lg`}>{lastPlayedGame.name}</h3>
                  <p className={`${textSecondaryClass} text-sm mb-1`}>{lastPlayedGame.description}</p>
                  <p className="text-red-500 text-sm font-medium">Par {lastPlayedGame.creator}</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1 text-green-500">
                      <Users size={14} />
                      <span className="text-sm font-medium">{formatNumber(lastPlayedGame.players)} joueurs</span>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-500">
                      <Star size={14} />
                      <span className="text-sm">{lastPlayedGame.rating}/5</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => onGamePlay(lastPlayedGame)}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  Rejoindre
                </button>
              </div>
            </div>
          )}

          {/* Expériences populaires */}
          <div>
            <h2 className={`${textClass} text-xl font-semibold mb-4 flex items-center space-x-2`}>
              <Star size={20} className="text-yellow-500" />
              <span>Expériences Populaires</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {topGames.slice(0, 4).map((game) => (
                <div
                  key={game.id}
                  className={`group ${cardBg} rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl cursor-pointer transition-all duration-300`}
                >
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2">
                      <button className={`p-1 ${isDarkTheme ? 'bg-black/50' : 'bg-white/50'} rounded-full ${textSecondaryClass} hover:text-red-500 transition-colors`}>
                        <Heart size={14} />
                      </button>
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex items-center space-x-2 text-white text-sm">
                        <Users size={12} />
                        <span className="font-medium">{formatNumber(game.players)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className={`${textClass} font-bold text-lg mb-1 group-hover:text-red-500 transition-colors`}>
                      {game.name}
                    </h3>
                    <p className={`${textSecondaryClass} text-sm mb-2`}>{game.description}</p>
                    <p className="text-red-500 text-sm font-medium mb-3">Par {game.creator}</p>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1 text-yellow-500">
                        <Star size={14} />
                        <span className="text-sm font-medium">{game.rating}/5</span>
                      </div>
                      <div className="flex items-center space-x-1 text-purple-500">
                        <Trophy size={14} />
                        <span className="text-sm">{formatNumber(game.visits)}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => onGamePlay(game)}
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
                    >
                      Rejoindre
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="col-span-4 space-y-6">
          {/* Profil utilisateur */}
          {user && (
            <div className={`${cardBg} rounded-xl p-6`}>
              <h3 className={`${textClass} font-bold text-lg mb-4`}>Mon Profil</h3>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={user.avatar} 
                  alt={user.displayName}
                  className="w-12 h-12 rounded-full border-2 border-red-500"
                />
                <div>
                  <h4 className={`${textClass} font-semibold`}>{user.displayName}</h4>
                  <p className={`${textSecondaryClass} text-sm`}>@{user.username}</p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className={textSecondaryClass}>Temps de jeu</span>
                  <span className={textClass}>127h</span>
                </div>
                <div className="flex justify-between">
                  <span className={textSecondaryClass}>Jeux favoris</span>
                  <span className={textClass}>12</span>
                </div>
                <div className="flex justify-between">
                  <span className={textSecondaryClass}>Niveau</span>
                  <span className="text-red-500 font-medium">Pro</span>
                </div>
              </div>
            </div>
          )}

          {/* Statistiques rapides */}
          <div className={`${cardBg} rounded-xl p-6`}>
            <h3 className={`${textClass} font-bold text-lg mb-4`}>Statistiques</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className={textSecondaryClass}>Joueurs en ligne</span>
                <span className="text-green-500 font-medium">2.4M</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={textSecondaryClass}>Serveurs actifs</span>
                <span className="text-blue-500 font-medium">45.2K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={textSecondaryClass}>Nouveaux jeux</span>
                <span className="text-purple-500 font-medium">1.2K</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={textSecondaryClass}>Statut</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-500 text-sm">En ligne</span>
                </div>
              </div>
            </div>
          </div>

          {/* Actualités rapides */}
          <div className={`${cardBg} rounded-xl p-6`}>
            <h3 className={`${textClass} font-bold text-lg mb-4`}>Actualités</h3>
            <div className="space-y-3">
              <div className={`p-3 ${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-lg`}>
                <h4 className={`${textClass} font-medium text-sm mb-1`}>Nouvelle mise à jour</h4>
                <p className={`${textSecondaryClass} text-xs`}>ForeM v2.1 disponible avec de nouvelles fonctionnalités</p>
              </div>
              <div className={`p-3 ${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-50'} rounded-lg`}>
                <h4 className={`${textClass} font-medium text-sm mb-1`}>Événement spécial</h4>
                <p className={`${textSecondaryClass} text-xs`}>Tournoi communautaire ce weekend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}