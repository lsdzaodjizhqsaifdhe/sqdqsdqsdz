import React from 'react';
import { Play, Clock, Star, Users, Heart, Trophy } from 'lucide-react';

interface RobloxGame {
  id: string;
  name: string;
  description: string;
  players: number;
  maxPlayers: number;
  creator: string;
  tags: string[];
  image: string;
  rating: number;
  visits: number;
}

export function HomeSection() {
  const lastGame: RobloxGame = {
    id: '1',
    name: 'Adopt Me!',
    description: 'Élève des animaux virtuels et décore ta maison !',
    players: 245678,
    maxPlayers: 999999,
    creator: 'DreamCraft',
    tags: ['Simulation', 'Animaux', 'Famille'],
    image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
    rating: 4.8,
    visits: 28500000000
  };

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
      rating: 4.6,
      visits: 15200000000
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
      rating: 4.7,
      visits: 9800000000
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
      rating: 4.9,
      visits: 12400000000
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000000) return (num / 1000000000).toFixed(1) + 'B';
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  return (
    <div className="p-8 space-y-8">
      {/* Play Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Prêt à jouer ?</h1>
        <button className="group bg-gradient-to-r from-blue-500 to-green-600 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 flex items-center space-x-3 mx-auto">
          <Play size={24} className="group-hover:scale-110 transition-transform" />
          <span>JOUER</span>
        </button>
        <p className="text-gray-400 mt-4">Découvrir des millions d'expériences</p>
      </div>

      {/* Last Played Game */}
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
        <h2 className="text-white text-xl font-semibold mb-4 flex items-center space-x-2">
          <Clock size={20} className="text-blue-400" />
          <span>Dernière expérience jouée</span>
        </h2>
        
        <div className="bg-gray-800/50 rounded-xl p-4 flex items-center space-x-4 hover:bg-gray-700/50 transition-all duration-200">
          <div className="w-20 h-20 rounded-lg overflow-hidden">
            <img src={lastGame.image} alt={lastGame.name} className="w-full h-full object-cover" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-white font-semibold text-lg">{lastGame.name}</h3>
            <p className="text-gray-400 text-sm mb-1">{lastGame.description}</p>
            <p className="text-blue-400 text-sm font-medium">Par {lastGame.creator}</p>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1 text-green-400">
                <Users size={14} />
                <span className="text-sm font-medium">{formatNumber(lastGame.players)} joueurs</span>
              </div>
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star size={14} />
                <span className="text-sm">{lastGame.rating}/5</span>
              </div>
              <div className="flex items-center space-x-1 text-purple-400">
                <Trophy size={14} />
                <span className="text-sm">{formatNumber(lastGame.visits)} visites</span>
              </div>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-blue-500 to-green-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105">
            Rejoindre
          </button>
        </div>
      </div>

      {/* Top Games */}
      <div>
        <h2 className="text-white text-xl font-semibold mb-6 flex items-center space-x-2">
          <Star size={20} className="text-yellow-400" />
          <span>Expériences Populaires</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {topGames.map((game) => (
            <div
              key={game.id}
              className="group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-black/50 rounded-full text-gray-400 hover:text-red-400 transition-colors">
                    <Heart size={16} />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 text-white text-sm">
                    <Users size={14} />
                    <span className="font-medium">{formatNumber(game.players)} joueurs</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                  {game.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{game.description}</p>
                <p className="text-blue-400 text-sm font-medium mb-4">Par {game.creator}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star size={16} />
                    <span className="font-medium">{game.rating}/5</span>
                  </div>
                  <div className="flex items-center space-x-1 text-purple-400">
                    <Trophy size={16} />
                    <span className="text-sm">{formatNumber(game.visits)}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-green-600 text-white py-3 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/25 group-hover:scale-105">
                  Rejoindre
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}