// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EnAttente from './pages/EnAttente';
import Rejetee from './pages/Rejetee';
import PrivateRoute from './routes/PrivateRoute';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/en_attente" element={<EnAttente />} />
      <Route path="/rejetee" element={<Rejetee />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
    </Routes>
  </Router>
);

export default App;