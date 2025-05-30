import React, { useState } from 'react';
import { 
  BookOpen, 
  Download, 
  Eye, 
  Heart, 
  Star,
  Search,
  Filter,
  Upload,
  FileText,
  Video,
  Link,
  Image,
  Award,
  Clock,
  User,
  ChevronRight,
  ThumbsUp,
  Share2,
  Bookmark,
  ExternalLink,
  CheckCircle,
  Grid3x3,
  List
} from 'lucide-react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [difficultyFilter, setDifficultyFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('recent');

  const resourceCategories = [
    { id: 'all', name: 'Toutes les ressources', icon: BookOpen, color: 'bg-gray-100 text-gray-800' },
    { id: 'guides', name: 'Guides Pratiques', icon: FileText, color: 'bg-blue-100 text-blue-800' },
    { id: 'templates', name: 'Templates et Modèles', icon: FileText, color: 'bg-green-100 text-green-800' },
    { id: 'research', name: 'Études et Recherches', icon: BookOpen, color: 'bg-purple-100 text-purple-800' },
    { id: 'tools', name: 'Outils Numériques', icon: Link, color: 'bg-orange-100 text-orange-800' },
    { id: 'videos', name: 'Formations Vidéo', icon: Video, color: 'bg-red-100 text-red-800' }
  ];

  const difficultyLevels = [
    { id: 'all', name: 'Tous niveaux' },
    { id: 'beginner', name: 'Débutant' },
    { id: 'intermediate', name: 'Intermédiaire' },
    { id: 'advanced', name: 'Avancé' },
    { id: 'expert', name: 'Expert' }
  ];

  const resources = [
    {
      id: 1,
      title: 'Guide Complet : Comment se Présenter aux Élections Locales',
      description: 'Toutes les étapes pour candidater aux élections municipales et régionales.',
      shortDescription: 'Guide exhaustif pour les candidates aux élections locales',
      category: 'guides',
      type: 'Guide pratique',
      difficulty: 'Débutant',
      language: 'Français',
      estimatedTime: 45,
      author: 'Aline Mengue',
      authorRole: 'Experte en gouvernance',
      downloadCount: 234,
      viewCount: 567,
      rating: 4.8,
      ratingsCount: 24,
      tags: ['élections', 'candidature', 'campagne', 'local'],
      isFavorited: true,
      isFeatured: true,
      isNew: false,
      fileSize: '2.5 MB',
      format: 'PDF',
      createdAt: '2025-05-20',
      topics: ['Gouvernance locale', 'Processus électoral', 'Campagne politique']
    },
    {
      id: 2,
      title: 'Kit de Communication : Templates Réseaux Sociaux',
      description: 'Collection de templates professionnels pour optimiser votre présence sur les réseaux sociaux.',
      shortDescription: 'Templates prêts à utiliser pour vos communications digitales',
      category: 'templates',
      type: 'Kit de templates',
      difficulty: 'Intermédiaire',
      language: 'Français',
      estimatedTime: 20,
      author: 'Betty Nzoghe',
      authorRole: 'Spécialiste Communication',
      downloadCount: 189,
      viewCount: 423,
      rating: 4.6,
      ratingsCount: 18,
      tags: ['templates', 'réseaux sociaux', 'communication', 'design'],
      isFavorited: false,
      isFeatured: true,
      isNew: true,
      fileSize: '15.2 MB',
      format: 'ZIP',
      createdAt: '2025-05-25',
      topics: ['Communication digitale', 'Marketing politique', 'Réseaux sociaux']
    },
    {
      id: 3,
      title: 'Étude : Participation Politique des Femmes au Gabon 2020-2024',
      description: 'Analyse complète de l\'évolution de la représentation féminine en politique.',
      shortDescription: 'Analyse détaillée de la participation politique féminine',
      category: 'research',
      type: 'Étude de recherche',
      difficulty: 'Avancé',
      language: 'Français',
      estimatedTime: 90,
      author: 'Dr. Diane Moussounda',
      authorRole: 'Chercheuse en Sciences Politiques',
      downloadCount: 156,
      viewCount: 289,
      rating: 4.9,
      ratingsCount: 31,
      tags: ['étude', 'recherche', 'participation', 'statistiques'],
      isFavorited: true,
      isFeatured: false,
      isNew: false,
      fileSize: '8.7 MB',
      format: 'PDF',
      createdAt: '2025-05-18',
      topics: ['Recherche politique', 'Statistiques', 'Analyse comparative']
    },
    {
      id: 4,
      title: 'Boîte à Outils : Applications Indispensables',
      description: 'Sélection des meilleures applications mobiles pour les femmes politiques.',
      shortDescription: 'Applications recommandées pour optimiser votre activité politique',
      category: 'tools',
      type: 'Liste d\'outils',
      difficulty: 'Tous niveaux',
      language: 'Français',
      estimatedTime: 30,
      author: 'Cécile Obame',
      authorRole: 'Experte Digital',
      downloadCount: 98,
      viewCount: 201,
      rating: 4.4,
      ratingsCount: 12,
      tags: ['applications', 'outils', 'numérique', 'mobile'],
      isFavorited: false,
      isFeatured: false,
      isNew: true,
      fileSize: 'N/A',
      format: 'Web',
      createdAt: '2025-05-22',
      topics: ['Outils numériques', 'Productivité', 'Applications mobiles']
    },
    {
      id: 5,
      title: 'Série Vidéo : Techniques de Débat et Argumentation',
      description: 'Formation vidéo en 8 modules sur l\'art du débat politique.',
      shortDescription: 'Formation complète aux techniques de débat',
      category: 'videos',
      type: 'Formation vidéo',
      difficulty: 'Intermédiaire',
      language: 'Français',
      estimatedTime: 270,
      author: 'Estelle Koumba',
      authorRole: 'Coach en Communication',
      downloadCount: 145,
      viewCount: 334,
      rating: 4.7,
      ratingsCount: 22,
      tags: ['vidéo', 'débat', 'argumentation', 'formation'],
      isFavorited: false,
      isFeatured: true,
      isNew: false,
      fileSize: 'N/A',
      format: 'Vidéo',
      createdAt: '2025-05-15',
      topics: ['Débat politique', 'Argumentation', 'Communication orale']
    },
    {
      id: 6,
      title: 'Checklist : Lancement de Campagne Électorale',
      description: 'Liste complète des étapes essentielles pour démarrer une campagne.',
      shortDescription: 'Checklist détaillée pour organiser votre campagne',
      category: 'guides',
      type: 'Checklist',
      difficulty: 'Débutant',
      language: 'Français',
      estimatedTime: 15,
      author: 'Fabienne Ndong',
      authorRole: 'Conseillère en Stratégie',
      downloadCount: 267,
      viewCount: 445,
      rating: 4.5,
      ratingsCount: 19,
      tags: ['checklist', 'campagne', 'organisation', 'planning'],
      isFavorited: true,
      isFeatured: false,
      isNew: false,
      fileSize: '1.2 MB',
      format: 'PDF',
      createdAt: '2025-05-10',
      topics: ['Organisation de campagne', 'Planification', 'Stratégie électorale']
    }
  ];

  const featuredResources = resources.filter(resource => resource.isFeatured);
  const myFavorites = resources.filter(resource => resource.isFavorited);

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesDifficulty = difficultyFilter === 'all' || resource.difficulty.toLowerCase() === difficultyFilter;
    
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  const sortedResources = [...filteredResources].sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return new Date(b.createdAt) - new Date(a.createdAt);
      case 'popular':
        return b.downloadCount - a.downloadCount;
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return b.viewCount - a.viewCount;
      default:
        return 0;
    }
  });

  const getResourceIcon = (category) => {
    const categoryData = resourceCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : FileText;
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'débutant': return 'bg-green-100 text-green-800';
      case 'intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'avancé': return 'bg-orange-100 text-orange-800';
      case 'expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatTime = (minutes) => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}min` : `${hours}h`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-current opacity-50" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Bibliothèque de Ressources</h1>
        <p className="text-green-100 mb-4">
          Accédez à une collection complète de guides, outils et formations pour votre développement politique
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4" />
            <span>{resources.length} ressources disponibles</span>
          </div>
          <div className="flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>1,289 téléchargements ce mois</span>
          </div>
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4" />
            <span>Note moyenne: 4.6/5</span>
          </div>
        </div>
      </div>

      {/* Navigation et filtres */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Toutes ({filteredResources.length})
            </button>
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'featured'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              En vedette ({featuredResources.length})
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'favorites'
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Mes favoris ({myFavorites.length})
            </button>
          </div>

          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Upload className="w-4 h-4" />
            <span>Partager une ressource</span>
          </button>
        </div>

        {/* Filtres */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher une ressource..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 w-full"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
          >
            {resourceCategories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <select
            value={difficultyFilter}
            onChange={(e) => setDifficultyFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
          >
            {difficultyLevels.map(level => (
              <option key={level.id} value={level.id}>
                {level.name}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-green-500"
          >
            <option value="recent">Plus récentes</option>
            <option value="popular">Plus téléchargées</option>
            <option value="rating">Mieux notées</option>
            <option value="views">Plus vues</option>
          </select>

          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600'} rounded-l-lg`}
            >
              <Grid3x3 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600'} rounded-r-lg`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Ressources en vedette */}
      {activeTab === 'all' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>Ressources en Vedette</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredResources.slice(0, 3).map(resource => {
              const IconComponent = getResourceIcon(resource.category);
              return (
                <div key={resource.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                      {resource.difficulty}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      {resource.isNew && (
                        <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Nouveau</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-2">
                    <IconComponent className="w-5 h-5 text-gray-600" />
                    <h3 className="font-medium text-gray-900 line-clamp-2">{resource.title}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2">{resource.shortDescription}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                    <span>{resource.author}</span>
                    <span>{formatTime(resource.estimatedTime)}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {renderStars(resource.rating).slice(0, 3)}
                      <span className="text-xs text-gray-600">({resource.ratingsCount})</span>
                    </div>
                    <button className="text-xs text-green-600 font-medium hover:text-green-700">
                      Consulter
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Liste des ressources */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            {activeTab === 'all' && 'Toutes les Ressources'}
            {activeTab === 'featured' && 'Ressources en Vedette'}
            {activeTab === 'favorites' && 'Mes Ressources Favorites'}
          </h2>
          <p className="text-sm text-gray-600">
            {(() => {
              const currentResources = activeTab === 'favorites' ? myFavorites : 
                                     activeTab === 'featured' ? featuredResources : 
                                     sortedResources;
              return `${currentResources.length} ressource${currentResources.length > 1 ? 's' : ''} trouvée${currentResources.length > 1 ? 's' : ''}`;
            })()}
          </p>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6' : 'divide-y divide-gray-200'}>
          {(() => {
            const currentResources = activeTab === 'favorites' ? myFavorites : 
                                   activeTab === 'featured' ? featuredResources : 
                                   sortedResources;
            
            return currentResources.map(resource => {
              const IconComponent = getResourceIcon(resource.category);
              
              if (viewMode === 'grid') {
                return (
                  <div key={resource.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <IconComponent className="w-5 h-5 text-gray-600" />
                          <span className="text-sm text-gray-600">{resource.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          {resource.isFeatured && <Star className="w-4 h-4 text-yellow-500" />}
                          {resource.isNew && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Nouveau</span>
                          )}
                          <button className={`p-1 rounded ${resource.isFavorited ? 'text-red-500' : 'text-gray-400'}`}>
                            <Heart className={`w-4 h-4 ${resource.isFavorited ? 'fill-current' : ''}`} />
                          </button>
                        </div>
                      </div>
                      
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{resource.title}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-3">{resource.description}</p>
                      
                      <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                        <span className="flex items-center space-x-1">
                          <User className="w-3 h-3" />
                          <span>{resource.author}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{formatTime(resource.estimatedTime)}</span>
                        </span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                          {resource.difficulty}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {resource.format}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          {renderStars(resource.rating)}
                          <span className="text-xs text-gray-600 ml-1">({resource.ratingsCount})</span>
                        </div>
                        <div className="flex items-center space-x-3 text-xs text-gray-500">
                          <span className="flex items-center space-x-1">
                            <Download className="w-3 h-3" />
                            <span>{resource.downloadCount}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Eye className="w-3 h-3" />
                            <span>{resource.viewCount}</span>
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center justify-center space-x-1">
                          <Download className="w-4 h-4" />
                          <span>Télécharger</span>
                        </button>
                        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Eye className="w-4 h-4 text-gray-600" />
                        </button>
                        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                          <Share2 className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={resource.id} className="p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                          {resource.isFeatured && <Star className="w-4 h-4 text-yellow-500" />}
                          {resource.isNew && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Nouveau</span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{resource.description}</p>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-2">
                          <div className="flex items-center space-x-1">
                            <User className="w-4 h-4" />
                            <span>{resource.author}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{formatTime(resource.estimatedTime)}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span>{resource.downloadCount} téléchargements</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            {renderStars(resource.rating).slice(0, 3)}
                            <span>({resource.ratingsCount})</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                              {resource.difficulty}
                            </span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              {resource.format}
                            </span>
                            <span className="text-xs text-gray-500">
                              {formatDate(resource.createdAt)}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <button className={`p-2 rounded-lg ${resource.isFavorited ? 'text-red-500' : 'text-gray-400 hover:text-red-500'} transition-colors`}>
                              <Heart className={`w-4 h-4 ${resource.isFavorited ? 'fill-current' : ''}`} />
                            </button>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center space-x-2">
                              <Download className="w-4 h-4" />
                              <span>Télécharger</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            });
          })()}
        </div>
        
        {(() => {
          const currentResources = activeTab === 'favorites' ? myFavorites : 
                                 activeTab === 'featured' ? featuredResources : 
                                 sortedResources;
          
          if (currentResources.length === 0) {
            return (
              <div className="p-12 text-center">
                <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {activeTab === 'favorites' ? 'Aucune ressource favorite' : 'Aucune ressource trouvée'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {activeTab === 'favorites' 
                    ? 'Explorez les ressources et ajoutez celles qui vous intéressent à vos favoris.'
                    : 'Essayez de modifier vos critères de recherche ou explorez d\'autres catégories.'
                  }
                </p>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  {activeTab === 'favorites' ? 'Découvrir les ressources' : 'Réinitialiser les filtres'}
                </button>
              </div>
            );
          }
          return null;
        })()}
      </div>
    </div>
  );
};

export default Resources;