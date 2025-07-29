import React, { useState } from 'react';
import { Search, Filter, Star, Users, Heart, Play, ArrowLeft, ExternalLink, Globe, Shield, Zap } from 'lucide-react';

interface RobloxGame {
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

export function ServersSection() {
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
        description: 'Adopt Me! est l\'expérience #1 sur Roblox ! Élève et prends soin d\'une variété d\'animaux mignons qui écloront d\'œufs ! Explore le monde d\'Adoption Island où tu peux explorer, faire des échanges et construire ta maison de rêve.',
        features: [
          'Plus de 180 animaux à collectionner',
          'Décore ta maison avec des milliers d\'objets',
          'Échange avec des joueurs du monde entier',
          'Événements saisonniers réguliers',
          'Mini-jeux amusants',
          'Système de véhicules unique'
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
        description: 'Bienvenue à Brookhaven, où tu peux être qui tu veux ! Roleplay avec tes amis, explore la ville, conduis des voitures et vis ta meilleure vie virtuelle.',
        features: [
          'Ville entièrement explorable',
          'Système de véhicules réaliste',
          'Maisons personnalisables',
          'Emplois et activités variés',
          'Mode créatif avancé',
          'Communauté active et amicale'
        ]
      }
    },
    {
      id: '3',
      name: 'Tower of Hell',
      description: 'Escalade la tour la plus difficile de Roblox !',
      players: 156789,
      maxPlayers: 999999,
      creator: 'YXCeptional Studios',
      tags: ['obby', 'défi', 'compétition', 'parkour'],
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
        description: 'Tower of Hell est un jeu d\'obby où les joueurs doivent escalader une tour générée aléatoirement sans points de contrôle. Chaque section change toutes les 8 minutes !',
        features: [
          'Tours générées aléatoirement',
          'Plus de 1000 sections différentes',
          'Système de classement compétitif',
          'Défis quotidiens et hebdomadaires',
          'Skins et effets déblocables',
          'Mode spectateur intégré'
        ]
      }
    },
    {
      id: '4',
      name: 'Blox Fruits',
      description: 'Deviens le pirate le plus fort des océans !',
      players: 298765,
      maxPlayers: 999999,
      creator: 'Gamer Robot Inc',
      tags: ['action', 'aventure', 'anime', 'combat'],
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
        description: 'Inspiré de One Piece, Blox Fruits te permet de devenir un puissant utilisateur de fruit du démon ou un épéiste légendaire. Explore les océans et deviens le plus fort !',
        features: [
          'Plus de 35 fruits du démon uniques',
          'Système de combat avancé',
          'Monde ouvert massif à explorer',
          'Quêtes et boss épiques',
          'PvP compétitif',
          'Mises à jour régulières avec nouveau contenu'
        ]
      }
    },
    {
      id: '5',
      name: 'Murder Mystery 2',
      description: 'Qui est l\'assassin ? Résous le mystère !',
      players: 87654,
      maxPlayers: 999999,
      creator: 'Nikilis',
      tags: ['mystère', 'social', 'stratégie', 'multijoueur'],
      image: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=800',
      banner: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.5,
      visits: 8900000000,
      details: {
        genre: 'Mystère/Social',
        created: '8 janvier 2014',
        updated: 'Il y a 1 semaine',
        maxServers: 12,
        language: 'Anglais',
        allowedGear: ['Aucun équipement'],
        description: 'Dans Murder Mystery 2, un joueur est secrètement l\'assassin, un autre est le shérif, et tous les autres sont des innocents. L\'assassin doit éliminer tout le monde sans se faire prendre !',
        features: [
          'Gameplay de déduction sociale',
          'Centaines d\'armes et couteaux collectibles',
          'Système d\'échange intégré',
          'Cartes variées et détaillées',
          'Événements saisonniers spéciaux',
          'Classements et statistiques'
        ]
      }
    },
    {
      id: '6',
      name: 'Jailbreak',
      description: 'Évade-toi de prison ou arrête les criminels !',
      players: 134567,
      maxPlayers: 999999,
      creator: 'Badimo',
      tags: ['action', 'crime', 'véhicules', 'roleplay'],
      image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      banner: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      rating: 4.4,
      visits: 6700000000,
      details: {
        genre: 'Action/Crime',
        created: '21 avril 2017',
        updated: 'Il y a 5 jours',
        maxServers: 30,
        language: 'Anglais',
        allowedGear: ['Aucun équipement'],
        description: 'Jailbreak est un jeu de rôle où tu peux choisir d\'être un criminel qui s\'évade de prison et commet des braquages, ou un policier qui maintient l\'ordre dans la ville.',
        features: [
          'Monde ouvert avec ville complète',
          'Plus de 50 véhicules différents',
          'Braquages complexes et variés',
          'Système de police réaliste',
          'Personnalisation de personnage',
          'Saisons avec récompenses exclusives'
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

  if (selectedGame) {
    return (
      <div className="p-8">
        {/* Back Button */}
        <button
          onClick={() => setSelectedGame(null)}
          className="flex items-center space-x-2 text-gray-400 hover:text-white mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Retour aux serveurs</span>
        </button>

        {/* Game Banner */}
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
                <p className="text-blue-400 text-lg font-medium">Par {selectedGame.creator}</p>
                <div className="flex items-center space-x-6 mt-3">
                  <div className="flex items-center space-x-1 text-green-400">
                    <Users size={16} />
                    <span className="font-medium">{formatNumber(selectedGame.players)} joueurs</span>
                  </div>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star size={16} />
                    <span>{selectedGame.rating}/5</span>
                  </div>
                  <div className="flex items-center space-x-1 text-purple-400">
                    <span>{formatNumber(selectedGame.visits)} visites</span>
                  </div>
                </div>
              </div>
              <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 flex items-center space-x-2">
                <Play size={20} />
                <span>REJOINDRE</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Description */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
              <h2 className="text-white text-xl font-bold mb-4">À propos de cette expérience</h2>
              <p className="text-gray-300 leading-relaxed mb-4">{selectedGame.details.description}</p>
              <div className="flex flex-wrap gap-2">
                {selectedGame.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded-full border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
              <h2 className="text-white text-xl font-bold mb-4 flex items-center space-x-2">
                <Zap className="text-yellow-400" size={20} />
                <span>Fonctionnalités</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedGame.details.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800/30 rounded-lg">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Game Stats */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
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
                  <span className="text-green-400 font-medium">{selectedGame.details.updated}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Serveurs max</span>
                  <span className="text-white font-medium">{selectedGame.details.maxServers}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 flex items-center space-x-1">
                    <Globe size={14} />
                    <span>Langue</span>
                  </span>
                  <span className="text-white font-medium">{selectedGame.details.language}</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
              <h3 className="text-white font-bold text-lg mb-4">Actions rapides</h3>
              <div className="space-y-3">
                <button className="w-full bg-red-600/20 border border-red-600/50 text-red-400 py-3 px-4 rounded-lg font-medium hover:bg-red-600/30 transition-colors flex items-center justify-center space-x-2">
                  <Heart size={16} />
                  <span>Ajouter aux favoris</span>
                </button>
                <button className="w-full bg-blue-600/20 border border-blue-600/50 text-blue-400 py-3 px-4 rounded-lg font-medium hover:bg-blue-600/30 transition-colors flex items-center justify-center space-x-2">
                  <ExternalLink size={16} />
                  <span>Voir sur Roblox</span>
                </button>
                <button className="w-full bg-gray-700/50 border border-gray-600/50 text-gray-300 py-3 px-4 rounded-lg font-medium hover:bg-gray-600/50 transition-colors flex items-center justify-center space-x-2">
                  <Shield size={16} />
                  <span>Signaler</span>
                </button>
              </div>
            </div>

            {/* Creator Info */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
              <h3 className="text-white font-bold text-lg mb-4">Créateur</h3>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{selectedGame.creator[0]}</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{selectedGame.creator}</h4>
                  <p className="text-gray-400 text-sm">Développeur vérifié</p>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Voir le profil
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-6">Expériences Roblox</h1>
        
        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher une expérience..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800/50 border border-gray-700 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400" size={20} />
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-500 to-green-600 text-white'
                    : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="space-y-4">
        {filteredGames.map((game) => (
          <div
            key={game.id}
            onClick={() => setSelectedGame(game)}
            className={`group bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer ${
              game.featured 
                ? 'border-yellow-500/50 hover:border-yellow-400/70' 
                : 'border-gray-700/50 hover:border-gray-600/50'
            }`}
          >
            <div className="flex items-center p-6">
              {/* Game Image */}
              <div className="relative w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={game.image} 
                  alt={game.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {game.featured && (
                  <div className="absolute top-2 right-2">
                    <Star className="text-yellow-400 fill-current" size={20} />
                  </div>
                )}
              </div>

              {/* Game Info */}
              <div className="flex-1 ml-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-bold text-2xl group-hover:text-blue-400 transition-colors mb-1">
                      {game.name}
                    </h3>
                    <p className="text-blue-400 font-medium">Par {game.creator}</p>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-red-400 transition-colors">
                    <Heart size={24} />
                  </button>
                </div>
                
                <p className="text-gray-400 mb-4 text-lg">{game.description}</p>
                
                <div className="flex items-center space-x-6 mb-4">
                  <div className="flex items-center space-x-2 text-green-400">
                    <Users size={18} />
                    <span className="font-medium text-lg">{formatNumber(game.players)} joueurs</span>
                  </div>
                  <div className="flex items-center space-x-2 text-yellow-400">
                    <Star size={18} />
                    <span className="text-lg">{game.rating}/5</span>
                  </div>
                  <div className="flex items-center space-x-2 text-purple-400">
                    <span className="text-lg">{formatNumber(game.visits)} visites</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {game.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex flex-col items-end space-y-4 ml-6">
                <button className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-green-500/25 hover:scale-105 flex items-center space-x-2">
                  <Play size={20} />
                  <span>REJOINDRE</span>
                </button>
                <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center space-x-1">
                  <span>Voir détails</span>
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">Aucune expérience trouvée</div>
          <p className="text-gray-500 mt-2">Essayez d'ajuster vos filtres de recherche</p>
        </div>
      )}
    </div>
  );
}