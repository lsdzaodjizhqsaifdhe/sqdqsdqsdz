import React from 'react';
import { Calendar, Eye, MessageCircle, ExternalLink } from 'lucide-react';
import { RobloxUser } from '../App';

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

interface NewsSectionProps {
  isDarkTheme: boolean;
  user: RobloxUser | null;
}

export function NewsSection({ isDarkTheme, user }: NewsSectionProps) {
  const news: NewsItem[] = [
    {
      id: '1',
      title: 'ForeM v2.1 - Nouvelles fonctionnalités révolutionnaires !',
      excerpt: 'Découvrez les dernières améliorations de ForeM avec une interface repensée et de nouvelles fonctionnalités.',
      content: 'Lorem ipsum dolor sit amet...',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 12500,
      comments: 45,
      category: 'Mise à jour'
    },
    {
      id: '2',
      title: 'Tournoi communautaire - Gagnez des prix exclusifs !',
      excerpt: 'Participez au plus grand tournoi de la communauté ForeM et remportez des récompenses incroyables.',
      content: 'Lorem ipsum dolor sit amet...',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/1666310/pexels-photo-1666310.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 8900,
      comments: 23,
      category: 'Événement'
    },
    {
      id: '3',
      title: 'Nouveaux serveurs disponibles - Performance améliorée',
      excerpt: 'Nous avons ajouté de nouveaux serveurs pour une expérience de jeu encore plus fluide.',
      content: 'Lorem ipsum dolor sit amet...',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
      views: 6750,
      comments: 18,
      category: 'Technique'
    }
  ];

  const categories = ['Toutes', 'Mise à jour', 'Événement', 'Technique', 'Communauté'];
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

  const cardBg = isDarkTheme 
    ? 'bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50'
    : 'bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg';
  
  const textClass = isDarkTheme ? 'text-white' : 'text-gray-900';
  const textSecondaryClass = isDarkTheme ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className="h-full overflow-hidden p-6">
      <div className="mb-6">
        <h1 className={`text-3xl font-bold ${textClass} mb-6`}>Actualités ForeM</h1>
        
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                  : `${isDarkTheme ? 'bg-gray-800/50' : 'bg-gray-100'} ${textSecondaryClass} hover:${textClass}`
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="h-full overflow-auto">
        {filteredNews.length > 0 && (
          <div className="mb-8">
            <div className={`group ${cardBg} rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-300 cursor-pointer`}>
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={filteredNews[0].image} 
                  alt={filteredNews[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
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
                  <h2 className="text-white text-2xl font-bold mb-2 group-hover:text-red-400 transition-colors">
                    {filteredNews[0].title}
                  </h2>
                  <p className="text-gray-300 text-lg">{filteredNews[0].excerpt}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredNews.slice(1).map((article) => (
            <div
              key={article.id}
              className={`group ${cardBg} rounded-xl overflow-hidden hover:scale-105 cursor-pointer transition-all duration-300`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-red-600 text-white px-2 py-1 rounded-md text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className={`flex items-center space-x-4 mb-3 text-sm ${textSecondaryClass}`}>
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
                
                <h3 className={`${textClass} font-bold text-lg mb-3 group-hover:text-red-500 transition-colors line-clamp-2`}>
                  {article.title}
                </h3>
                
                <p className={`${textSecondaryClass} text-sm mb-4 line-clamp-3`}>
                  {article.excerpt}
                </p>
                
                <button className="flex items-center space-x-2 text-red-500 hover:text-red-400 font-medium text-sm transition-colors">
                  <span>Lire la suite</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-12">
            <div className={`${textSecondaryClass} text-lg`}>Aucun article trouvé</div>
            <p className={`${textSecondaryClass} mt-2`}>Aucun article ne correspond à cette catégorie</p>
          </div>
        )}
      </div>
    </div>
  );
}