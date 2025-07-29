import React, { useState } from 'react';
import { Search, Filter, Star, Users, Heart, Play, ArrowLeft, ExternalLink, Globe, Shield, Zap } from 'lucide-react';
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
      name: 'Adopt Me!',
      description: 'Élève des animaux virtuels et décore ta maison de rêve !',
      players: 245678,
      maxPlayers: 999999,
      creator: 'DreamCraft',
      tags: ['simulation', 'animaux', 'famille', 'social'],
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      banner: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.8,
      visits: 28500000000,
      featured: true,
      details: {
        genre: 'Simulation de vie',
        created: '14 juillet 2017',
        updated: 'Il y a 2 heures',
        maxServers: 48,
        language: 'Français/Anglais',
        allowedGear: ['Tous les équipements'],
        description: 'Adopt Me! est l\'expérience #1 sur Roblox ! Élève et prends soin d\'une variété d\'animaux mignons qui écloront d\'œufs !',
        features: [
          'Plus de 180 animaux à collectionner',
          'Décore ta maison avec des milliers d\'objets',
          'Échange avec des joueurs du monde entier',
          'Événements saisonniers réguliers'
        ]
      }
    },
    {
      id: '2',
      name: 'Brookhaven RP',
      description: 'Vis ta vie dans une ville moderne avec tes amis !',
      players: 189432,
      maxPlayers: 999999,
      creator: 'Wolfpaq',
      tags: ['roleplay', 'ville', 'social', 'simulation'],
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
        description: 'Bienvenue à Brookhaven, où tu peux être qui tu veux ! Roleplay avec tes amis, explore la ville.',
        features: [
          'Ville entièrement explorable',
          'Système de véhicules réaliste',
          'Maisons personnalisables',
          'Emplois et activités variés'
        ]
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous' },
    { id: 'simulation', label: 'Simulation' },
    { id: 'action', label: 'Action' },
    { id: 'roleplay', label: 'Roleplay' },
    { id: 'obby', label: 'Obby' },
    { id: 'social', label: 'Social' }
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

  const cardBg = isDarkTheme 
    ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50'
    : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg';
  
  const textClass = isDarkTheme ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = isDarkTheme ? 'text-gray-400' : 'text-gray-600';
  const inputBg = isDarkTheme ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-300';

  if (selectedGame) {
    return (
      <div className="h-full overflow-auto p-6">
        <button
          onClick={() => setSelectedGame(null)}
          className={`flex items-center space-x-2 ${textSecondaryClass} hover:${textClass} mb-6 transition-colors`}
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
                    <span className="font-medium">{formatNumber(selectedGame.players)} joueurs</span>
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
            <div className={`${cardBg} rounded-xl p-6`}>
              <h2 className={`${textClass} text-xl font-bold mb-4`}>À propos de cette expérience</h2>
              <p className={`${textClass} leading-relaxed mb-4`}>{selectedGame.details.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedGame.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-red-500/20 text-red-500 text-sm rounded-full border border-red-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className={`${cardBg} rounded-xl p-6`}>
              <h2 className={`${textClass} text-xl font-bold mb-4 flex items-center space-x-2`}>
                <Zap className="text-yellow-400" size={20} />
                <span>Fonctionnalités</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedGame.details.features.map((feature, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 ${isDarkTheme ? 'bg-gray-800/30' : 'bg-gray-50'} rounded-lg`}>
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className={textClass}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`${cardBg} rounded-xl p-6`}>
              <h3 className={`${textClass} font-bold text-lg mb-4`}>Informations</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={textSecondaryClass}>Genre</span>
                  <span className={`${textClass} font-medium`}>{selectedGame.details.genre}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={textSecondaryClass}>Créé le</span>
                  <span className={`${textClass} font-medium`}>{selectedGame.details.created}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={textSecondaryClass}>Mis à jour</span>
                  <span className="text-red-500 font-medium">{selectedGame.details.updated}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full overflow-hidden p-6">
      <div className="mb-6">
        <h1 className={`text-3xl font-bold ${textClass} mb-6`}>Expériences Roblox</h1>
        
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${textSecondaryClass}`} size={20} />
            <input
              type="text"
              placeholder="Rechercher une expérience..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full ${inputBg} border rounded-xl pl-12 pr-4 py-3 ${textClass} placeholder-${textSecondaryClass} focus:outline-none focus:border-red-500 transition-colors`}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className={textSecondaryClass} size={20} />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                    : `${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-100'} ${textSecondaryClass} hover:${textClass}`
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="h-full overflow-auto space-y-4">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            onClick={() => setSelectedGame(game)}
            className={`group ${cardBg} rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer ${
              game.featured 
                ? 'border-red-500/50 hover:border-red-400/70' 
                : 'hover:border-red-300/50'
            }`}
          >
            <div className="flex items-center p-6">
              <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {game.featured && (
                  <div className="absolute top-2 right-2">
                    <Star className="text-red-500 fill-current" size={20} />
                  </div>
                )}
              </div>

              <div className="flex-1 ml-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className={`${textClass} font-bold text-2xl group-hover:text-red-500 transition-colors mb-1`}>
                      {game.name}
                    </h3>
                    <p className="text-red-500 font-medium">Par {game.creator}</p>
                  </div>
                  <button className={`p-2 ${textSecondaryClass} hover:text-red-500 transition-colors`}>
                    <Heart size={24} />
                  </button>
                </div>
                
                <p className={`${textSecondaryClass} mb-4 text-lg`}>{game.description}</p>
                
                <div className="flex items-center space-x-6 mb-4">
                  <div className="flex items-center space-x-2 text-green-500">
                    <Users size={18} />
                    <span className="font-medium text-lg">{formatNumber(game.players)} joueurs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-500">
                    <Star size={18} />
                    <span className="text-lg">{game.rating}/5</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {game.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 ${isDarkTheme ? 'bg-gray-700/50' : 'bg-gray-100'} ${textSecondaryClass} text-sm rounded-full`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-end space-y-4 ml-6">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onGamePlay(game);
                  }}
                  className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105 flex items-center space-x-2"
                >
                  <Play size={20} />
                  <span>REJOINDRE</span>
                </button>
                <button className="text-red-500 hover:text-red-400 font-medium transition-colors flex items-center space-x-1">
                  <span>Voir détails</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}