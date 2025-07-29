import React from 'react';
import { Users, MessageSquare, Trophy, Star, ExternalLink, Calendar } from 'lucide-react';

export function CommunitySection() {
  const stats = [
    { label: 'Membres actifs', value: '258.2k', icon: Users, color: 'text-blue-400' },
    { label: 'Messages par jour', value: '15.7k', icon: MessageSquare, color: 'text-green-400' },
    { label: 'Serveurs en ligne', value: '29,780', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Note moyenne', value: '4.8/5', icon: Star, color: 'text-purple-400' }
  ];

  const communityHighlights = [
    {
      id: '1',
      title: 'Serveur du mois : REDSIDE RP V5',
      description: 'Découvrez pourquoi ce serveur roleplay est devenu un incontournable de la communauté.',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      category: 'Serveur vedette'
    },
    {
      id: '2',
      title: 'Tournoi PvP - Arena Championship',
      description: 'Participez au plus grand tournoi PvP de la communauté avec des prix exclusifs.',
      image: 'https://images.pexels.com/photos/1666310/pexels-photo-1666310.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-20',
      category: 'Événement'
    },
    {
      id: '3',
      title: 'Concours de création de contenu',
      description: 'Montrez votre créativité et gagnez des récompenses incroyables !',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-25',
      category: 'Concours'
    }
  ];

  const quickLinks = [
    { name: 'Forum officiel', icon: MessageSquare, href: '#' },
    { name: 'Discord communauté', icon: Users, href: '#' },
    { name: 'Guide débutant', icon: Star, href: '#' },
    { name: 'Support technique', icon: ExternalLink, href: '#' }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-white mb-8">Communauté</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6 hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-center space-x-3 mb-3">
                <Icon className={stat.color} size={24} />
                <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
              </div>
              <div className="text-white text-2xl font-bold">{stat.value}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Community Highlights */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-white mb-6">À la une</h2>
          <div className="space-y-6">
            {communityHighlights.map((highlight) => (
              <div
                key={highlight.id}
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-gray-600/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex">
                  <div className="w-48 h-32 flex-shrink-0 overflow-hidden">
                    <img 
                      src={highlight.image} 
                      alt={highlight.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                        {highlight.category}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm">
                        <Calendar size={12} />
                        <span>{new Date(highlight.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-blue-400 transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Links */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
            <h3 className="text-white font-bold text-lg mb-4">Liens utiles</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="flex items-center space-x-3 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-all duration-200 group"
                  >
                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                    <span>{link.name}</span>
                    <ExternalLink size={14} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Discord Widget */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
            <h3 className="text-white font-bold text-lg mb-4">Discord</h3>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-white" size={24} />
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Rejoignez notre communauté Discord pour échanger avec d'autres joueurs
              </p>
              <button className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Rejoindre Discord
              </button>
            </div>
          </div>

          {/* Online Status */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 p-6">
            <h3 className="text-white font-bold text-lg mb-4">Statut en temps réel</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Joueurs en ligne</span>
                <span className="text-green-400 font-medium">124,567</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Serveurs actifs</span>
                <span className="text-blue-400 font-medium">8,921</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Statut serveurs</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-400 text-sm">Opérationnel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}