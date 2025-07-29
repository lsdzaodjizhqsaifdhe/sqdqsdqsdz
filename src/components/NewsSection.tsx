import React from 'react';
import { Calendar, Eye, MessageCircle, ExternalLink } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
  views: number;
  comments: number;
  category: string;
}

export function NewsSection() {
  const news: NewsItem[] = [
    {
      id: '1',
      title: 'Celebrating one year with Rockstar Games, CFX Fest, Community updates and more!',
      excerpt: 'Une année incroyable avec Rockstar Games et de nombreuses nouveautés pour la communauté.',
      content: 'Lorem ipsum dolor sit amet...',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 12500,
      comments: 45,
      category: 'Mise à jour'
    },
    {
      id: '2',
      title: 'GTA Online: The Chop Shop - Bottom Dollar Bounties is now available',
      excerpt: 'Nouvelles missions et récompenses disponibles dans la dernière mise à jour de GTA Online.',
      content: 'Lorem ipsum dolor sit amet...',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/1666310/pexels-photo-1666310.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 8900,
      comments: 23,
      category: 'GTA Online'
    },
    {
      id: '3',
      title: 'Community Pulse - April 2024',
      excerpt: 'Découvrez les dernières nouvelles de la communauté et les serveurs en vedette ce mois-ci.',
      content: 'Lorem ipsum dolor sit amet...',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 6750,
      comments: 18,
      category: 'Communauté'
    },
    {
      id: '4',
      title: 'Community Pulse - March 2024',
      excerpt: 'Retour sur les événements du mois dernier et aperçu des nouveautés à venir.',
      content: 'Lorem ipsum dolor sit amet...',
      date: '2024-01-01',
      image: 'https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 5430,
      comments: 12,
      category: 'Communauté'
    }
  ];

  const categories = ['Toutes', 'Mise à jour', 'GTA Online', 'Communauté', 'Événements'];
  const [selectedCategory, setSelectedCategory] = React.useState('Toutes');

  const filteredNews = selectedCategory === 'Toutes' 
    ? news 
    : news.filter(item => item.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-6">Actualités</h1>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article */}
      {filteredNews.length > 0 && (
        <div className="mb-8">
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 cursor-pointer group">
            <div className="relative h-80 overflow-hidden">
              <img 
                src={filteredNews[0].image} 
                alt={filteredNews[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {filteredNews[0].category}
                  </span>
                  <div className="flex items-center space-x-4 text-gray-300 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(filteredNews[0].date)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye size={14} />
                      <span>{filteredNews[0].views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MessageCircle size={14} />
                      <span>{filteredNews[0].comments}</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-white text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {filteredNews[0].title}
                </h2>
                <p className="text-gray-300 text-lg">{filteredNews[0].excerpt}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Articles Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredNews.slice(1).map((article) => (
          <div
            key={article.id}
            className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                  {article.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-3 text-sm text-gray-400">
                <div className="flex items-center space-x-1">
                  <Calendar size={12} />
                  <span>{formatDate(article.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye size={12} />
                  <span>{article.views.toLocaleString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle size={12} />
                  <span>{article.comments}</span>
                </div>
              </div>
              
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
                <span>Lire la suite</span>
                <ExternalLink size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-lg">Aucun article trouvé</div>
          <p className="text-gray-500 mt-2">Aucun article ne correspond à cette catégorie</p>
        </div>
      )}
    </div>
  );
}