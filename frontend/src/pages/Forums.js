import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Users, 
  Calendar, 
  TrendingUp,
  Search,
  Filter,
  Plus,
  Pin,
  MessageCircle,
  Eye,
  Heart,
  Clock,
  User,
  ChevronRight,
  Star
} from 'lucide-react';

const Forums = () => {
  const [activeTab, setActiveTab] = useState('categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState('recent');

  const forumCategories = [
    {
      id: 1,
      name: 'Gouvernance et Institutions',
      description: 'Discussions sur les réformes institutionnelles, la transparence et la bonne gouvernance.',
      icon: '🏛️',
      color: 'bg-blue-100 text-blue-800',
      topicCount: 47,
      postCount: 234,
      lastActivity: '2h',
      featuredTopics: [
        'Digitalisation des services publics',
        'Budget participatif local'
      ]
    },
    {
      id: 2,
      name: 'Développement Durable',
      description: 'Environnement, changement climatique et développement durable au Gabon.',
      icon: '🌱',
      color: 'bg-green-100 text-green-800',
      topicCount: 32,
      postCount: 156,
      lastActivity: '4h',
      featuredTopics: [
        'Écotourisme responsable',
        'Gestion des déchets urbains'
      ]
    },
    {
      id: 3,
      name: 'Santé et Protection Sociale',
      description: 'Politiques de santé, protection sociale et bien-être des populations.',
      icon: '❤️',
      color: 'bg-red-100 text-red-800',
      topicCount: 28,
      postCount: 167,
      lastActivity: '1h',
      featuredTopics: [
        'Couverture maladie universelle',
        'Santé maternelle'
      ]
    },
    {
      id: 4,
      name: 'Éducation et Formation',
      description: 'Système éducatif, formation professionnelle et développement des compétences.',
      icon: '📚',
      color: 'bg-purple-100 text-purple-800',
      topicCount: 41,
      postCount: 198,
      lastActivity: '3h',
      featuredTopics: [
        'Formation technique adaptée',
        'Éducation numérique'
      ]
    },
    {
      id: 5,
      name: 'Entrepreneuriat et Innovation',
      description: 'Startup, innovation technologique et développement de l\'écosystème entrepreneurial.',
      icon: '💡',
      color: 'bg-yellow-100 text-yellow-800',
      topicCount: 35,
      postCount: 145,
      lastActivity: '6h',
      featuredTopics: [
        'Fintech et inclusion financière',
        'Startup au féminin'
      ]
    },
    {
      id: 6,
      name: 'Agriculture et Sécurité Alimentaire',
      description: 'Modernisation agricole, sécurité alimentaire et développement rural.',
      icon: '🌾',
      color: 'bg-orange-100 text-orange-800',
      topicCount: 29,
      postCount: 134,
      lastActivity: '5h',
      featuredTopics: [
        'Coopératives agricoles féminines',
        'Agriculture moderne'
      ]
    }
  ];

  const recentTopics = [
    {
      id: 1,
      title: 'Digitalisation des services publics : opportunités et défis',
      category: 'Gouvernance et Institutions',
      author: 'Aline Mengue',
      replies: 23,
      views: 156,
      lastReply: '2h',
      isPinned: true,
      isHot: true,
      tags: ['numérique', 'administration', 'inclusion']
    },
    {
      id: 2,
      title: 'Écotourisme : levier de développement économique durable',
      category: 'Développement Durable',
      author: 'Betty Nzoghe',
      replies: 18,
      views: 234,
      lastReply: '4h',
      isPinned: false,
      isHot: true,
      tags: ['écotourisme', 'développement', 'environnement']
    },
    {
      id: 3,
      title: 'Couverture maladie universelle : retour d\'expérience',
      category: 'Santé et Protection Sociale',
      author: 'Diane Moussounda',
      replies: 31,
      views: 289,
      lastReply: '1h',
      isPinned: false,
      isHot: false,
      tags: ['CMU', 'santé', 'protection sociale']
    },
    {
      id: 4,
      title: 'Formation technique et professionnelle : adapter l\'offre au marché',
      category: 'Éducation et Formation',
      author: 'Cécile Obame',
      replies: 15,
      views: 167,
      lastReply: '3h',
      isPinned: false,
      isHot: false,
      tags: ['formation', 'emploi', 'compétences']
    },
    {
      id: 5,
      title: 'Fintech au Gabon : révolutionner l\'inclusion financière',
      category: 'Entrepreneuriat et Innovation',
      author: 'Estelle Koumba',
      replies: 27,
      views: 203,
      lastReply: '6h',
      isPinned: false,
      isHot: true,
      tags: ['fintech', 'inclusion financière', 'innovation']
    }
  ];

  const trendingTopics = [
    { title: 'Budget participatif local', replies: 45, trend: '+12%' },
    { title: 'Femmes entrepreneures', replies: 38, trend: '+8%' },
    { title: 'Agriculture durable', replies: 34, trend: '+15%' },
    { title: 'Éducation numérique', replies: 29, trend: '+6%' }
  ];

  const filteredTopics = recentTopics.filter(topic =>
    topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    topic.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const sortedTopics = [...filteredTopics].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.lastReply) - new Date(a.lastReply);
      case 'popular':
        return b.replies - a.replies;
      case 'views':
        return b.views - a.views;
      default:
        return 0;
    }
  });

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Forums de Discussion</h1>
        <p className="text-blue-100">
          Échangez avec la communauté des femmes engagées en politique
        </p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-4 h-4" />
            <span>247 discussions actives</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>156 membres connectées</span>
          </div>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4" />
            <span>+23 nouveaux messages aujourd'hui</span>
          </div>
        </div>
      </div>

      {/* Navigation et outils */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'categories'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Catégories
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'recent'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Récentes
            </button>
            <button
              onClick={() => setActiveTab('trending')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'trending'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Tendances
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher une discussion..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full sm:w-64"
              />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <Plus className="w-4 h-4" />
              <span>Nouvelle discussion</span>
            </button>
          </div>
        </div>

        {activeTab === 'recent' && (
          <div className="mt-4 flex items-center space-x-3">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500"
            >
              <option value="recent">Plus récentes</option>
              <option value="popular">Plus populaires</option>
              <option value="views">Plus vues</option>
            </select>
          </div>
        )}
      </div>

      {/* Contenu principal */}
      {activeTab === 'categories' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {forumCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="flex items-start space-x-4">
                <div className="text-3xl">{category.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                      {category.topicCount} sujets
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{category.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{category.postCount} messages</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>Il y a {category.lastActivity}</span>
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {category.featuredTopics.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 text-xs">
                        <ChevronRight className="w-3 h-3 text-blue-500" />
                        <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
                          {topic}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'recent' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Discussions Récentes</h2>
            <p className="text-sm text-gray-600">
              {filteredTopics.length} discussion{filteredTopics.length > 1 ? 's' : ''} trouvée{filteredTopics.length > 1 ? 's' : ''}
            </p>
          </div>
          <div className="divide-y divide-gray-200">
            {sortedTopics.map((topic) => (
              <div key={topic.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      {topic.isPinned && (
                        <Pin className="w-4 h-4 text-yellow-500" />
                      )}
                      {topic.isHot && (
                        <Star className="w-4 h-4 text-red-500" />
                      )}
                      <h3 className="text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                        {topic.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <span>Par {topic.author}</span>
                      <span>dans {topic.category}</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>Il y a {topic.lastReply}</span>
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4" />
                          <span>{topic.replies} réponses</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{topic.views} vues</span>
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {topic.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'trending' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Sujets Tendance</h2>
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{topic.title}</h4>
                        <p className="text-sm text-gray-600">{topic.replies} réponses</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="text-sm font-medium text-green-600">{topic.trend}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Membres Actives</h3>
              <div className="space-y-3">
                {['Aline Mengue', 'Betty Nzoghe', 'Diane Moussounda', 'Cécile Obame'].map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{member}</p>
                      <p className="text-xs text-gray-500">{Math.floor(Math.random() * 50) + 10} messages</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">Règles de la Communauté</h3>
              <ul className="text-sm space-y-1 text-blue-100">
                <li>• Respectez les autres membres</li>
                <li>• Restez dans le sujet</li>
                <li>• Partagez des sources fiables</li>
                <li>• Utilisez un langage approprié</li>
              </ul>
              <button className="mt-3 text-sm text-white underline hover:no-underline">
                Lire le règlement complet
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forums;