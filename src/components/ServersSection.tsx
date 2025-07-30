import React, { useState } from 'react';
import { Search, Filter, Star, Users, Heart, Play, ArrowLeft, ExternalLink, Globe, Shield, Zap, Eye, MessageCircle } from 'lucide-react';
import { RobloxGame, RobloxUser } from '../App';

interface ServersSectionProps {
  isDarkTheme: boolean;
  user: RobloxUser | null;
  onGamePlay: (game: RobloxGame) => void;
}

export function ServersSection({ isDarkTheme, user, onGamePlay }: ServersSectionProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedGame, setSelectedGame] = useState<RobloxGame | null>(null);

  const games: RobloxGame[] = [
    {
      id: '1',
      name: 'REDSIDE RP V5',
      description: 'RP Sérieux → Contenu exclusif',
      players: 728,
      maxPlayers: 1450,
      creator: 'RedSide Team',
      tags: ['roleplay', 'esx', 'rp', 'police'],
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100',
      banner: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.8,
      visits: 28500000000,
      featured: true,
      details: {
        genre: 'Roleplay',
        created: '14 juillet 2017',
        updated: 'Il y a 2 heures',
        maxServers: 48,
        language: 'Français',
        allowedGear: ['Tous les équipements'],
        description: 'Serveur RP sérieux avec contenu exclusif et staff actif',
        features: [
          'Plus de 180 métiers disponibles',
          'Système économique avancé',
          'Events réguliers',
          'Staff professionnel 24/7'
        ]
      }
    },
    {
      id: '2',
      name: 'Dynasty RP',
      description: 'RETOUR DE LA V1 → FreeAccess → RP Fun → Retour aux sources',
      players: 197,
      maxPlayers: 1200,
      creator: 'Dynasty Team',
      tags: ['roleplay', 'rp', 'police', 'vrp'],
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=100',
      banner: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.6,
      visits: 15200000000,
      details: {
        genre: 'Roleplay',
        created: '21 avril 2020',
        updated: 'Il y a 1 jour',
        maxServers: 12,
        language: 'Français',
        allowedGear: ['Aucun équipement'],
        description: 'Retour aux sources du RP avec Dynasty',
        features: [
          'Ville entièrement explorable',
          'Système de véhicules réaliste',
          'Maisons personnalisables',
          'Emplois et activités variés'
        ]
      }
    },
    {
      id: '3',
      name: 'RevolutionRP',
      description: 'FREE→ACCESS → Optimisé → Staff actif → discord.gg/revrp',
      players: 263,
      maxPlayers: 2048,
      creator: 'Revolution Team',
      tags: ['roleplay', 'esx', 'rp', 'police'],
      image: 'https://images.pexels.com/photos/1666310/pexels-photo-1666310.jpeg?auto=compress&cs=tinysrgb&w=100',
      banner: 'https://images.pexels.com/photos/1666310/pexels-photo-1666310.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.7,
      visits: 9800000000,
      details: {
        genre: 'Roleplay',
        created: '6 juin 2018',
        updated: 'Il y a 3 heures',
        maxServers: 20,
        language: 'Français',
        allowedGear: ['Aucun équipement'],
        description: 'Serveur RP optimisé avec staff actif',
        features: [
          'Serveur optimisé',
          'Staff disponible 24/7',
          'Discord actif',
          'Communauté bienveillante'
        ]
      }
    },
    {
      id: '4',
      name: 'UNITY RP V2 #1',
      description: '#SERVEUR→EXCLUSIF → RP Sérieux → Optimisé → Contenu E...',
      players: 834,
      maxPlayers: 2048,
      creator: 'Unity Team',
      tags: ['roleplay', 'rp', 'fr', 'life'],
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=100',
      banner: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.9,
      visits: 12400000000,
      featured: true,
      details: {
        genre: 'Roleplay',
        created: '17 janvier 2019',
        updated: 'Il y a 30 minutes',
        maxServers: 30,
        language: 'Français',
        allowedGear: ['Aucun équipement'],
        description: 'Serveur exclusif Unity RP avec contenu premium',
        features: [
          'Contenu exclusif premium',
          'Serveur ultra optimisé',
          'RP sérieux uniquement',
          'Events hebdomadaires'
        ]
      }
    },
    {
      id: '5',
      name: 'SensityRP',
      description: 'FREE→ACCESS UNIQUE → Chaque moment est une décou...',
      players: 105,
      maxPlayers: 2048,
      creator: 'Sensity Team',
      tags: ['roleplay', 'rp', 'police', 'ems'],
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=100',
      banner: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.5,
      visits: 8500000000,
      details: {
        genre: 'Roleplay',
        created: '12 mars 2021',
        updated: 'Il y a 1 heure',
        maxServers: 15,
        language: 'Français',
        allowedGear: ['Aucun équipement'],
        description: 'Découvrez une expérience RP unique',
        features: [
          'Expérience unique',
          'Accès gratuit',
          'Découvertes constantes',
          'Communauté active'
        ]
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'roleplay', label: 'Roleplay' },
    { id: 'esx', label: 'ESX' },
    { id: 'police', label: 'Police' },
    { id: 'rp', label: 'RP' }
  ];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.creator.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || game.tags.includes(selectedFilter);
    return matchesSearch && matchesFilter;
  });

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getServerIcon = (name: string) => {
    const firstLetter = name.charAt(0).toUpperCase();
    const colors = [
      'bg-red-600', 'bg-blue-600', 'bg-green-600', 'bg-purple-600', 
      'bg-yellow-600', 'bg-pink-600', 'bg-indigo-600', 'bg-orange-600'
    ];
    const colorIndex = name.charCodeAt(0) % colors.length;
    return { letter: firstLetter, color: colors[colorIndex] };
  };

  if (selectedGame) {
    return (
      <div className="h-full overflow-auto p-6 bg-gray-900">
        <button
          onClick={() => setSelectedGame(null)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Retour aux serveurs</span>
        </button>

        <div className="relative h-64 rounded-2xl overflow-hidden mb-8">
          <img 
            src={selectedGame.banner} 
            alt={selectedGame.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-end space-x-6">
              <div className="w-24 h-24 rounded-xl overflow-hidden border-4 border-white/20">
                <img src={selectedGame.image} alt={selectedGame.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <h1 className="text-white text-3xl font-bold mb-2">{selectedGame.name}</h1>
                <p className="text-red-400 text-lg font-medium">Par {selectedGame.creator}</p>
                <div className="flex items-center space-x-6 mt-3">
                  <div className="flex items-center space-x-1 text-green-400">
                    <Users size={16} />
                    <span className="font-medium">{selectedGame.players}/{selectedGame.maxPlayers}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star size={16} />
                    <span>{selectedGame.rating}/5</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => onGamePlay(selectedGame)}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 flex items-center space-x-2"
              >
                <Play size={20} />
                <span>REJOINDRE</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h2 className="text-white text-xl font-bold mb-4">À propos de cette expérience</h2>
              <p className="text-white leading-relaxed mb-4">{selectedGame.details.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedGame.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-red-500/20 text-red-400 text-sm rounded-full border border-red-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h2 className="text-white text-xl font-bold mb-4 flex items-center space-x-2">
                <Zap className="text-yellow-400" size={20} />
                <span>Fonctionnalités</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedGame.details.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Genre</span>
                  <span className="text-white font-medium">{selectedGame.details.genre}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Créé le</span>
                  <span className="text-white font-medium">{selectedGame.details.created}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Mis à jour</span>
                  <span className="text-red-400 font-medium">{selectedGame.details.updated}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-hidden bg-gray-900">
      {/* Header avec recherche et filtres */}
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-white">Serveurs</h1>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors">
              <Filter size={16} />
              <span>Filter</span>
            </button>
            <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors">
              <Eye size={16} />
            </button>
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder='Search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 border border-red-500 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-400 transition-colors"
          />
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                selectedFilter === filter.id
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Liste des serveurs */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="space-y-2">
            {filteredGames.map((game) => {
              const serverIcon = getServerIcon(game.name);
              return (
                <div
                  key={game.id}
                  onClick={() => setSelectedGame(game)}
                  className="group flex items-center space-x-4 p-3 bg-gray-800/30 hover:bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50 rounded-lg cursor-pointer transition-all duration-200"
                >
                  {/* Icône du serveur */}
                  <div className={`w-10 h-10 ${serverIcon.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">{serverIcon.letter}</span>
                  </div>

                  {/* Nom et description */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2">
                      <h3 className="text-white font-semibold text-sm group-hover:text-red-400 transition-colors truncate">
                        {game.name}
                      </h3>
                      {game.featured && (
                        <Star className="text-red-500 fill-current flex-shrink-0" size={14} />
                      )}
                    </div>
                    <p className="text-gray-400 text-xs truncate">{game.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="hidden lg:flex items-center space-x-1 flex-shrink-0">
                    {game.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Indicateurs */}
                  <div className="flex items-center space-x-3 text-xs text-gray-400 flex-shrink-0">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-yellow-500">🇫🇷</span>
                    </div>
                  </div>

                  {/* Joueurs */}
                  <div className="text-right flex-shrink-0">
                    <div className="text-white font-medium text-sm">
                      {game.players} / {game.maxPlayers}
                    </div>
                  </div>

                  {/* Bouton rejoindre */}
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onGamePlay(game);
                    }}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors flex-shrink-0"
                  >
                    Rejoindre
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sidebar des serveurs populaires */}
      <div className="fixed right-6 top-24 w-80 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Star className="text-red-500" size={16} />
          <h3 className="text-white font-semibold">Featured servers</h3>
        </div>
        
        <div className="space-y-3">
          {[
            { name: 'Arena', desc: 'PvP • Gun Game • King Of The Hill • Tournaments •', players: '521 / 2048', color: 'bg-green-600' },
            { name: 'Impulse99 Freeroam', desc: 'Custom cars and maps! Join various minigames: from', players: '210 / 900', color: 'bg-red-600' },
            { name: 'GLife: Extinction & Freeroam New Season', desc: 'Gangs • Businesses • Survival • Fuel • Zombies', players: '184 / 999', color: 'bg-blue-600' },
            { name: 'Cops and Robbers V NA #1', desc: 'Cops • Robbers • EMS • Truckers • Drugs • Redzones', players: '108 / 110', color: 'bg-yellow-600' },
            { name: 'RSM Freeroam: NA', desc: 'Custom Cars & Maps • Drifting • Racing • PvP • Mi', players: '104 / 2000', color: 'bg-purple-600' }
          ].map((server, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 hover:bg-gray-700/30 rounded-lg cursor-pointer transition-colors">
              <div className={`w-8 h-8 ${server.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className="text-white font-bold text-xs">{server.name.charAt(0)}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-medium text-sm truncate">{server.name}</div>
                <div className="text-gray-400 text-xs truncate">{server.desc}</div>
              </div>
              <div className="text-gray-300 text-xs flex-shrink-0">{server.players}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}