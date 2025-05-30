import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users,
  Search,
  Filter,
  Plus,
  Star,
  ChevronRight,
  Video,
  Award,
  DollarSign,
  CheckCircle,
  AlertCircle,
  User
} from 'lucide-react';

const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const eventCategories = [
    { id: 'all', name: 'Tous les événements', color: 'bg-gray-100 text-gray-800' },
    { id: 'formation', name: 'Formations', color: 'bg-blue-100 text-blue-800' },
    { id: 'conference', name: 'Conférences', color: 'bg-purple-100 text-purple-800' },
    { id: 'workshop', name: 'Ateliers', color: 'bg-green-100 text-green-800' },
    { id: 'networking', name: 'Networking', color: 'bg-pink-100 text-pink-800' },
    { id: 'mentoring', name: 'Mentorat', color: 'bg-yellow-100 text-yellow-800' }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Masterclass : Prise de Parole en Public',
      shortDescription: 'Apprenez à captiver votre audience et communiquer avec impact.',
      category: 'formation',
      type: 'Formation',
      startDate: '2025-05-27',
      endDate: '2025-05-27',
      startTime: '14:00',
      endTime: '18:00',
      locationType: 'physical',
      venue: 'Centre de Formation Féminin',
      city: 'Libreville',
      region: 'Estuaire',
      maxParticipants: 25,
      currentParticipants: 18,
      price: 0,
      isFree: true,
      organizer: 'Aline Mengue',
      skills: ['Communication', 'Leadership', 'Confiance en soi'],
      image: '/api/placeholder/400/200',
      isRegistered: true,
      isFeatured: true,
      difficulty: 'Intermédiaire'
    },
    {
      id: 2,
      title: 'Débat : Femmes et Transformation Numérique du Gabon',
      shortDescription: 'Table ronde sur le rôle des femmes dans la digitalisation du pays.',
      category: 'conference',
      type: 'Débat',
      startDate: '2025-05-30',
      endDate: '2025-05-30',
      startTime: '16:00',
      endTime: '19:00',
      locationType: 'hybrid',
      venue: 'Auditorium Université Omar Bongo',
      city: 'Libreville',
      region: 'Estuaire',
      onlineLink: 'https://zoom.us/j/example',
      maxParticipants: 150,
      currentParticipants: 89,
      price: 0,
      isFree: true,
      organizer: 'Betty Nzoghe',
      skills: ['Innovation', 'Technologie', 'Entrepreneuriat'],
      image: '/api/placeholder/400/200',
      isRegistered: false,
      isFeatured: true,
      difficulty: 'Tous niveaux'
    },
    {
      id: 3,
      title: 'Atelier : Gestion de Campagne Électorale',
      shortDescription: 'Formation pratique à la planification et gestion d\'une campagne.',
      category: 'workshop',
      type: 'Atelier',
      startDate: '2025-06-02',
      endDate: '2025-06-03',
      startTime: '09:00',
      endTime: '17:00',
      locationType: 'physical',
      venue: 'Salle de Formation CEPFAG',
      city: 'Port-Gentil',
      region: 'Ogooué-Maritime',
      maxParticipants: 30,
      currentParticipants: 22,
      price: 15000,
      isFree: false,
      organizer: 'Diane Moussounda',
      skills: ['Stratégie', 'Communication', 'Management'],
      image: '/api/placeholder/400/200',
      isRegistered: true,
      isFeatured: false,
      difficulty: 'Avancé'
    },
    {
      id: 4,
      title: 'Rencontre Femmes Leaders Haut-Ogooué',
      shortDescription: 'Networking régional pour créer des synergies.',
      category: 'networking',
      type: 'Networking',
      startDate: '2025-06-05',
      endDate: '2025-06-05',
      startTime: '15:00',
      endTime: '19:00',
      locationType: 'physical',
      venue: 'Restaurant Le Palais',
      city: 'Franceville',
      region: 'Haut-Ogooué',
      maxParticipants: 20,
      currentParticipants: 15,
      price: 0,
      isFree: true,
      organizer: 'Cécile Obame',
      skills: ['Networking', 'Collaboration', 'Leadership'],
      image: '/api/placeholder/400/200',
      isRegistered: false,
      isFeatured: false,
      difficulty: 'Tous niveaux'
    },
    {
      id: 5,
      title: 'Formation : Négociation et Diplomatie',
      shortDescription: 'Techniques avancées de négociation en contexte politique.',
      category: 'formation',
      type: 'Formation',
      startDate: '2025-06-10',
      endDate: '2025-06-11',
      startTime: '09:00',
      endTime: '17:00',
      locationType: 'physical',
      venue: 'Institut Diplomatique',
      city: 'Libreville',
      region: 'Estuaire',
      maxParticipants: 15,
      currentParticipants: 8,
      price: 25000,
      isFree: false,
      organizer: 'Estelle Koumba',
      skills: ['Négociation', 'Diplomatie', 'Médiation'],
      image: '/api/placeholder/400/200',
      isRegistered: false,
      isFeatured: true,
      difficulty: 'Expert'
    },
    {
      id: 6,
      title: 'Session de Mentorat : Développer son Leadership',
      shortDescription: 'Accompagnement personnalisé pour les femmes aspirantes.',
      category: 'mentoring',
      type: 'Mentorat',
      startDate: '2025-06-12',
      endDate: '2025-06-12',
      startTime: '10:00',
      endTime: '16:00',
      locationType: 'online',
      onlineLink: 'https://meet.google.com/example',
      maxParticipants: 10,
      currentParticipants: 7,
      price: 0,
      isFree: true,
      organizer: 'Fabienne Ndong',
      skills: ['Leadership', 'Développement personnel', 'Coaching'],
      image: '/api/placeholder/400/200',
      isRegistered: false,
      isFeatured: false,
      difficulty: 'Débutant'
    }
  ];

  const myEvents = upcomingEvents.filter(event => event.isRegistered);

  const filteredEvents = upcomingEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Débutant': return 'bg-green-100 text-green-800';
      case 'Intermédiaire': return 'bg-yellow-100 text-yellow-800';
      case 'Avancé': return 'bg-orange-100 text-orange-800';
      case 'Expert': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getLocationIcon = (locationType) => {
    switch (locationType) {
      case 'online': return <Video className="w-4 h-4" />;
      case 'hybrid': return <Users className="w-4 h-4" />;
      default: return <MapPin className="w-4 h-4" />;
    }
  };

  const getLocationText = (event) => {
    switch (event.locationType) {
      case 'online': return 'En ligne';
      case 'hybrid': return `${event.city} + En ligne`;
      default: return `${event.venue}, ${event.city}`;
    }
  };

  const isEventFull = (event) => {
    return event.currentParticipants >= event.maxParticipants;
  };

  const getAvailableSpots = (event) => {
    return event.maxParticipants - event.currentParticipants;
  };

  return (
    <div className="space-y-6">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Événements & Formations</h1>
        <p className="text-purple-100 mb-4">
          Développez vos compétences et élargissez votre réseau professionnel
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>12 événements ce mois</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4" />
            <span>345 participantes inscrites</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-4 h-4" />
            <span>Certificats disponibles</span>
          </div>
        </div>
      </div>

      {/* Navigation et filtres */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'upcoming'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              À venir ({filteredEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('my-events')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'my-events'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Mes événements ({myEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeTab === 'past'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Passés
            </button>
          </div>

          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Organiser un événement</span>
          </button>
        </div>

        {/* Filtres */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Rechercher un événement..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 w-full"
            />
          </div>
          
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          >
            {eventCategories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <div className="flex border border-gray-300 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3 py-2 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-600'} rounded-l-lg`}
            >
              <Users className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-3 py-2 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-600'} rounded-r-lg`}
            >
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Événements en vedette */}
      {activeTab === 'upcoming' && (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center space-x-2">
            <Star className="w-5 h-5 text-yellow-500" />
            <span>Événements en Vedette</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredEvents.filter(event => event.isFeatured).slice(0, 3).map(event => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}>
                    {event.difficulty}
                  </span>
                  <Star className="w-4 h-4 text-yellow-500" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">{event.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{formatDate(event.startDate)}</p>
                <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                  {getLocationIcon(event.locationType)}
                  <span>{getLocationText(event)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {event.currentParticipants}/{event.maxParticipants} participants
                  </span>
                  {event.isRegistered ? (
                    <span className="text-xs text-green-600 font-medium">✓ Inscrite</span>
                  ) : (
                    <button className="text-xs text-purple-600 font-medium hover:text-purple-700">
                      S'inscrire
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Liste des événements */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            {activeTab === 'upcoming' && 'Événements à Venir'}
            {activeTab === 'my-events' && 'Mes Événements'}
            {activeTab === 'past' && 'Événements Passés'}
          </h2>
          <p className="text-sm text-gray-600">
            {activeTab === 'upcoming' && `${filteredEvents.length} événement${filteredEvents.length > 1 ? 's' : ''} disponible${filteredEvents.length > 1 ? 's' : ''}`}
            {activeTab === 'my-events' && `${myEvents.length} événement${myEvents.length > 1 ? 's' : ''} inscrit${myEvents.length > 1 ? 's' : ''}`}
          </p>
        </div>

        <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6' : 'divide-y divide-gray-200'}>
          {(activeTab === 'my-events' ? myEvents : filteredEvents).map(event => (
            <div key={event.id} className={viewMode === 'grid' ? 'border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow' : 'p-6 hover:bg-gray-50 transition-colors'}>
              {viewMode === 'grid' ? (
                <div>
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                      <div className="text-white text-center">
                        <Calendar className="w-12 h-12 mx-auto mb-2" />
                        <p className="font-medium">{event.type}</p>
                      </div>
                    </div>
                    {event.isFeatured && (
                      <div className="absolute top-2 right-2 bg-yellow-500 text-white p-1 rounded-full">
                        <Star className="w-4 h-4" />
                      </div>
                    )}
                    {isEventFull(event) && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Complet
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}>
                        {event.difficulty}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${eventCategories.find(cat => cat.id === event.category)?.color}`}>
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{event.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{event.shortDescription}</p>
                    
                    <div className="space-y-2 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(event.startDate)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.startTime} - {event.endTime}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {getLocationIcon(event.locationType)}
                        <span className="line-clamp-1">{getLocationText(event)}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{event.currentParticipants}/{event.maxParticipants} participants</span>
                      </div>
                      {!event.isFree && (
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-4 h-4" />
                          <span>{event.price.toLocaleString()} FCFA</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {event.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{event.organizer}</span>
                      </div>
                      
                      {event.isRegistered ? (
                        <div className="flex items-center space-x-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Inscrite</span>
                        </div>
                      ) : isEventFull(event) ? (
                        <div className="flex items-center space-x-2 text-red-600">
                          <AlertCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Complet</span>
                        </div>
                      ) : (
                        <button className="bg-purple-600 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors">
                          S'inscrire
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Calendar className="w-8 h-8" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold text-gray-900">{event.title}</h3>
                      {event.isFeatured && (
                        <Star className="w-4 h-4 text-yellow-500" />
                      )}
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{event.shortDescription}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(event.startDate)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{event.startTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        {getLocationIcon(event.locationType)}
                        <span>{event.city}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-3 h-3" />
                        <span>{event.currentParticipants}/{event.maxParticipants}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(event.difficulty)}`}>
                          {event.difficulty}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${eventCategories.find(cat => cat.id === event.category)?.color}`}>
                          {event.type}
                        </span>
                        {!event.isFree && (
                          <span className="text-xs text-gray-600 font-medium">
                            {event.price.toLocaleString()} FCFA
                          </span>
                        )}
                      </div>
                      
                      {event.isRegistered ? (
                        <div className="flex items-center space-x-2 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm font-medium">Inscrite</span>
                        </div>
                      ) : (
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors flex items-center space-x-2">
                          <span>S'inscrire</span>
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {(activeTab === 'my-events' ? myEvents : filteredEvents).length === 0 && (
          <div className="p-12 text-center">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              {activeTab === 'my-events' ? 'Aucun événement inscrit' : 'Aucun événement trouvé'}
            </h3>
            <p className="text-gray-600 mb-4">
              {activeTab === 'my-events' 
                ? 'Explorez les événements disponibles et inscrivez-vous à ceux qui vous intéressent.'
                : 'Essayez de modifier vos critères de recherche ou explorez d\'autres catégories.'
              }
            </p>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
              {activeTab === 'my-events' ? 'Découvrir les événements' : 'Réinitialiser les filtres'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;