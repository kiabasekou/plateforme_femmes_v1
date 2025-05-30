import React, { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Forums from './pages/Forums';
import Events from './pages/Events';
import Resources from './pages/Resources';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Changez à false pour voir la page de connexion
  const [showSignUp, setShowSignUp] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  // Données utilisateur simulées
  const currentUser = {
    id: 1,
    firstName: 'Aline',
    lastName: 'Mengue',
    email: 'aline.mengue@example.com',
    name: 'Aline Mengue',
    isVerified: true,
    role: 'member',
    region: 'Estuaire',
    city: 'Libreville'
  };

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
  };

  if (!isAuthenticated) {
    return showSignUp ? (
      <SignUp onSuccess={() => {
        setIsAuthenticated(true);
        setShowSignUp(false);
      }} />
    ) : (
      <Login 
        onLogin={() => setIsAuthenticated(true)}
        onSignUp={() => setShowSignUp(true)}
      />
    );
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'profile':
        return <Profile />;
      case 'forums':
        return <Forums />;
      case 'events':
        return <Events />;
      case 'resources':
        return <Resources />;
      case 'networking':
        return (
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">🤝 Réseautage</h2>
            <p className="text-gray-600 mb-4">
              Connectez-vous avec d'autres femmes politiques et développez votre réseau professionnel.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                <strong>Bientôt disponible :</strong> Annuaire des membres, messagerie privée, 
                groupes d'intérêt, événements de networking personnalisés.
              </p>
            </div>
          </div>
        );
      case 'stats':
        return (
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">📊 Statistiques</h2>
            <p className="text-gray-600 mb-4">
              Suivez votre progression et analysez votre activité sur la plateforme.
            </p>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm">
                <strong>Bientôt disponible :</strong> Graphiques d'activité, métriques de performance, 
                comparaisons avec la communauté, rapports personnalisés.
              </p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4">⚙️ Paramètres</h2>
            <p className="text-gray-600 mb-4">
              Personnalisez votre expérience et gérez vos préférences.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">
                <strong>Bientôt disponible :</strong> Préférences de notification, thèmes personnalisés, 
                paramètres de confidentialité avancés, gestion des données.
              </p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout 
      currentUser={currentUser} 
      onLogout={handleLogout}
      onNavigate={handleNavigation}
      currentPage={currentPage}
    >
      {renderCurrentPage()}
    </Layout>
  );
}

export default App;