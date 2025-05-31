import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from '../redux/authSlice';
//import jwt_decode from 'jwt-decode'; Erreur jwt-code test-1 version problem
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/token/', {
        username: formData.username,
        password: formData.password
      });

      //const decodedUser = jwt_decode(res.data.access);Erreur jwt-code test-1 version problem
      const decodedUser = jwtDecode(res.data.access);


      localStorage.setItem('accessToken', res.data.access);
      localStorage.setItem('refreshToken', res.data.refresh);

      dispatch(loginSuccess({
        user: decodedUser,
        accessToken: res.data.access,
        refreshToken: res.data.refresh
      }));

      if (decodedUser.statut_validation === 'validee') {
        navigate('/dashboard');
      } else if (decodedUser.statut_validation === 'en_attente') {
        navigate('/en_attente');
      } else {
        navigate('/rejetee');
      }
    } catch (err) {
      setError("Échec de la connexion. Vérifiez vos identifiants.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4">
        <h2 className="text-2xl font-bold text-center">Connexion</h2>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={formData.username}
          onChange={(e) => handleInputChange('username', e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={formData.password}
          onChange={(e) => handleInputChange('password', e.target.value)}
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;