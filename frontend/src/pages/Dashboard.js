import React, { useState, useEffect } from 'react';
import { 
  UserIcon, 
  ChatBubbleLeftRightIcon, 
  CalendarDaysIcon,
  BookOpenIcon,
  TrophyIcon,
  ClockIcon,
  MapPinIcon,
  UsersIcon,
  ChevronRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const userStats = {
    profileCompletion: 85,
    forumPosts: 23,
    eventsAttended: 7,
    resourcesViewed: 34,
    connectionsCount: 156,
    mentorshipStatus: 'offering'
  };

  const recentActivities = [
    {
      id: 1,
      type: 'forum',
      title: 'Nouveau message dans "Gouvernance Locale"',
      description: 'Betty Nzoghe a répondu à votre discussion',
      time: '2h',
      icon: ChatBubbleLeftRightIcon,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      id: 2,
      type: 'event',
      title: 'Formation Leadership demain',
      description: 'Rappel : Formation à 14h00',
      time: '5h',
      icon: CalendarDaysIcon,
      color: 'text-green-600 bg-green-100'
    },
    {
      id: 3,
      type: 'achievement',
      title: 'Nouveau badge obtenu !',
      description: 'Badge "Mentore Active" débloqué',
      time: '1j',
      icon: TrophyIcon,
      color: 'text-yellow-600 bg-yellow-100'
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Masterclass : Prise de Parole en Public',
      date: '27 Mai 2025',
      time: '14:00',
      location: 'Centre de Formation Féminin',
      participants: 25,
      status: 'registered'
    },
    {
      id: 2,
      title: 'Débat : Femmes et Transformation Numérique',
      date: '30 Mai 2025',
      time: '16:00',
      location: 'Auditorium UOB',
      participants: 150,
      status: 'available'
    }
  ];

  const quickActions = [
    {
      title: 'Compléter mon profil',
      description: 'Ajoutez plus d\'informations',
      icon: UserIcon,
      color: 'bg-blue-500 hover:bg-blue-600',
      action: '/profile/edit'
    },
    {
      title: 'Créer une discussion',
      description: 'Lancez un nouveau sujet',
      icon: ChatBubbleLeftRightIcon,
      color: 'bg-green-500 hover:bg-green-600',
      action: '/forums/new'
    },
    {
      title: 'Parcourir les ressources',
      description: 'Découvrez de nouveaux guides',
      icon: BookOpenIcon,
      color: 'bg-purple-500 hover:bg-purple-600',
      action: '/resources'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* En-tête de bienvenue */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl p-6 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
        
        <div className="relative z-10">
          <div className="flex items-center space-x-2 mb-2">
            <SparklesIcon className="w-6 h-6" />
            <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
              Membre Vérifiée
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-1">Bonjour, Aline ! 👋</h1>
          <p className="text-blue-100">
            Bienvenue sur votre plateforme de développement politique
          </p>
          <p className="text-blue-200 text-sm mt-2">
            {currentTime.toLocaleDateString('fr-FR', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* Statistiques principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Profil Complété</h3>
              <p className="text-2xl font-bold text-blue-600">{userStats.profileCompletion}%</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <UserIcon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${userStats.profileCompletion}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Messages Forums</h3>
              <p className="text-2xl font-bold text-green-600">{userStats.forumPosts}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <ChatBubbleLeftRightIcon className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">+3 cette semaine</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Événements</h3>
              <p className="text-2xl font-bold text-purple-600">{userStats.eventsAttended}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <CalendarDaysIcon className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">2 prochains inscrits</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Connexions</h3>
              <p className="text-2xl font-bold text-pink-600">{userStats.connectionsCount}</p>
            </div>
            <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
              <UsersIcon className="w-6 h-6 text-pink-600" />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-2">Réseau actif</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Actions rapides */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Actions Rapides</h3>
            </div>
            <div className="p-6 space-y-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    className="w-full flex items-center space-x-4 p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 text-left group"
                  >
                    <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-700">
                        {action.title}
                      </h4>
                      <p className="text-xs text-gray-500">{action.description}</p>
                    </div>
                    <ChevronRightIcon className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Activités récentes */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Activités Récentes</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivities.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${activity.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-sm text-gray-500">{activity.description}</p>
                        <div className="flex items-center mt-1 space-x-2">
                          <ClockIcon className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-400">Il y a {activity.time}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6">
                <button className="w-full text-sm text-blue-600 hover:text-blue-700 font-medium py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Voir toutes les activités
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Événements à venir */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Événements à Venir</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-900 flex-1">{event.title}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    event.status === 'registered' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {event.status === 'registered' ? '✓ Inscrite' : 'Disponible'}
                  </span>
                </div>
                
                <div className="space-y-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <CalendarDaysIcon className="w-4 h-4" />
                    <span>{event.date} à {event.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPinIcon className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <UsersIcon className="w-4 h-4" />
                    <span>{event.participants} participants</span>
                  </div>
                </div>
                
                {event.status === 'available' && (
                  <button className="mt-3 w-full bg-blue-600 text-white text-xs font-medium py-2 px-3 rounded-lg hover:bg-blue-700 transition-colors">
                    S'inscrire
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badge de réussite */}
      <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-6 text-white">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
            <TrophyIcon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Félicitations ! 🎉</h3>
            <p className="text-green-100 text-sm">
              Votre plateforme React fonctionne parfaitement avec tous les composants intégrés !
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20">
            ✅ Dashboard interactif
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20">
            ✅ Animations fluides
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white bg-opacity-20">
            ✅ Design responsive
          </span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;