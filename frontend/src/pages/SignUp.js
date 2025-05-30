import React, { useState, useRef } from 'react'; // Importer useRef
import {
  Eye,
  EyeOff,
  CheckCircle, // CheckCircle est déjà importé, renommé CheckCircleIcon si vous voulez une icône différente
  AlertTriangle,
  FileCheck,
  Shield
} from 'lucide-react';

const SignUp = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [nipVerified, setNipVerified] = useState(false);
  const [formData, setFormData] = useState({
    // Étape 1 - Vérification NIP
    nip: '',
    nipDocument: null,

    // Étape 2 - Informations personnelles
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',

    // Étape 3 - Localisation
    region: '',
    city: '',
    address: '',

    // Étape 4 - Expérience politique
    politicalExperience: '',
    politicalInterests: [],
    currentPosition: '',
    organization: '',

    // Étape 5 - Sécurité
    password: '',
    confirmPassword: '',
    agreeTerms: false,
    agreeDataProcessing: false
  });

  const [errors, setErrors] = useState({});

  // Référence pour l'input de fichier caché
  const nipDocumentInputRef = useRef(null);

  const regions = [
    { value: 'estuaire', label: 'Estuaire' },
    { value: 'haut_ogooue', label: 'Haut-Ogooué' },
    { value: 'moyen_ogooue', label: 'Moyen-Ogooué' },
    { value: 'ngounie', label: 'Ngounié' },
    { value: 'nyanga', label: 'Nyanga' },
    { value: 'ogooue_ivindo', label: 'Ogooué-Ivindo' },
    { value: 'ogooue_lolo', label: 'Ogooué-Lolo' },
    { value: 'ogooue_maritime', label: 'Ogooué-Maritime' },
    { value: 'woleu_ntem', label: 'Woleu-Ntem' }
  ];

  const politicalInterestOptions = [
    'Gouvernance locale',
    'Droits des femmes',
    'Éducation',
    'Santé publique',
    'Économie et emploi',
    'Environnement',
    'Justice sociale',
    'Développement rural',
    'Jeunesse',
    'Culture et patrimoine'
  ];

  const experienceLevels = [
    { value: 'debutante', label: 'Débutante (aucune expérience)' },
    { value: 'intermediaire', label: 'Intermédiaire (expérience locale)' },
    { value: 'experimentee', label: 'Expérimentée (plusieurs mandats)' },
    { value: 'experte', label: 'Experte (leadership reconnu)' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Effacer l'erreur si elle existe
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleInputChange('nipDocument', file);
    }
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      politicalInterests: prev.politicalInterests.includes(interest)
        ? prev.politicalInterests.filter(i => i !== interest)
        : [...prev.politicalInterests, interest]
    }));
  };

  const verifyNIP = () => {
    // Simulation de vérification NIP
    if (formData.nip.length === 12 && formData.nipDocument) { // S'assurer que le document est également présent
      setNipVerified(true);
      setTimeout(() => {
        setCurrentStep(2);
      }, 1500);
    } else {
      const newErrors = {};
      if (formData.nip.length !== 12) {
        newErrors.nip = 'Le NIP doit contenir 12 caractères';
      }
      if (!formData.nipDocument) {
        newErrors.nipDocument = 'L\'attestation NIP est obligatoire';
      }
      setErrors(newErrors);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.nip) newErrors.nip = 'Le NIP est obligatoire';
        else if (formData.nip.length !== 12) newErrors.nip = 'Le NIP doit contenir 12 caractères'; // Ajout de la validation de longueur ici
        if (!formData.nipDocument) newErrors.nipDocument = 'L\'attestation NIP est obligatoire';
        break;

      case 2:
        if (!formData.firstName) newErrors.firstName = 'Le prénom est obligatoire';
        if (!formData.lastName) newErrors.lastName = 'Le nom est obligatoire';
        if (!formData.email) newErrors.email = 'L\'email est obligatoire';
        if (!formData.phone) newErrors.phone = 'Le téléphone est obligatoire';
        if (!formData.dateOfBirth) newErrors.dateOfBirth = 'La date de naissance est obligatoire';
        break;

      case 3:
        if (!formData.region) newErrors.region = 'La région est obligatoire';
        if (!formData.city) newErrors.city = 'La ville est obligatoire';
        break;

      case 4:
        if (!formData.politicalExperience) newErrors.politicalExperience = 'L\'expérience politique est obligatoire';
        if (formData.politicalInterests.length === 0) newErrors.politicalInterests = 'Sélectionnez au moins un centre d\'intérêt';
        break;

      case 5:
        if (!formData.password) newErrors.password = 'Le mot de passe est obligatoire';
        if (formData.password.length < 8) newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
        if (!formData.agreeTerms) newErrors.agreeTerms = 'Vous devez accepter les conditions';
        if (!formData.agreeDataProcessing) newErrors.agreeDataProcessing = 'Vous devez accepter le traitement des données';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = () => {
    if (validateStep(5)) {
      // Soumettre le formulaire
      console.log('Formulaire soumis:', formData);
      alert('Inscription réussie ! Votre compte sera activé après vérification.');
    }
  };

  const steps = [
    { number: 1, title: 'Vérification NIP', description: 'Attestation obligatoire' },
    { number: 2, title: 'Informations personnelles', description: 'Identité complète' },
    { number: 3, title: 'Localisation', description: 'Région et ville' },
    { number: 4, title: 'Profil politique', description: 'Expérience et intérêts' },
    { number: 5, title: 'Sécurité', description: 'Mot de passe et validation' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-8">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">MF</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Inscription</h1>
          <p className="mt-2 text-gray-600">
            Plateforme Femmes en Politique - République Gabonaise
          </p>
        </div>

        {/* Indicateur de progression */}
        <div className="mb-8 relative"> {/* Ajout de 'relative' pour positionner la ligne */}
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}> {/* Utilisation de React.Fragment pour envelopper */}
                <div className="flex flex-col items-center flex-1 z-10"> {/* z-10 pour s'assurer que les cercles sont au-dessus de la ligne */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 ${
                    currentStep >= step.number
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-400 border-gray-300'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <p className="text-xs font-medium text-gray-900">{step.title}</p>
                    <p className="text-xs text-gray-500">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>


        {/* Formulaire */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Étape 1 - Vérification NIP */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center">
                <Shield className="mx-auto w-16 h-16 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900">Vérification NIP</h2>
                <p className="text-gray-600 mt-2">
                  Conformément à la loi n° 027/2020, votre Numéro d'Identification Personnel est requis pour l'inscription.
                </p>
              </div>

              <div>
                <label htmlFor="nip" className="block text-sm font-medium text-gray-700 mb-2">
                  Numéro d'Identification Personnel (NIP) *
                </label>
                <input
                  type="text"
                  id="nip"
                  value={formData.nip}
                  onChange={(e) => handleInputChange('nip', e.target.value)}
                  placeholder="Saisissez votre NIP (12 caractères)"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    errors.nip ? 'border-red-300' : 'border-gray-300'
                  }`}
                  maxLength={12}
                />
                {errors.nip && (
                  <p className="mt-1 text-sm text-red-600">{errors.nip}</p>
                )}
              </div>

              <div>
                <label htmlFor="nipDocument" className="block text-sm font-medium text-gray-700 mb-2">
                  Attestation NIP (Document PDF/JPG) *
                </label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer
                    ${errors.nipDocument ? 'border-red-400' : 'border-gray-300 hover:border-blue-400'}
                  `}
                  onClick={() => nipDocumentInputRef.current.click()} // Ouvre le sélecteur de fichiers
                >
                  <FileCheck className="mx-auto w-12 h-12 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-600">
                    Glissez votre attestation NIP ici ou{' '}
                    <span className="text-blue-600 font-medium">parcourez</span>
                  </p>
                  {formData.nipDocument && (
                    <p className="text-sm text-gray-500 mt-1">Fichier sélectionné : {formData.nipDocument.name}</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG (max 5MB)</p>
                  {errors.nipDocument && (
                    <p className="mt-1 text-sm text-red-600">{errors.nipDocument}</p>
                  )}
                </div>
                <input
                  type="file"
                  id="nipDocument"
                  ref={nipDocumentInputRef} // Attache la référence
                  onChange={handleFileChange} // Gère la sélection de fichier
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="hidden" // Cache l'input de fichier par défaut
                />
              </div>

              {nipVerified && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" /> {/* Utilise CheckCircle au lieu de CheckCircleIcon */}
                  <div>
                    <p className="text-green-800 font-medium">NIP vérifié avec succès !</p>
                    <p className="text-green-600 text-sm">Redirection vers la suite...</p>
                  </div>
                </div>
              )}

              <button
                type="button"
                onClick={verifyNIP}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Vérifier et Continuer
              </button>
            </div>
          )}

          {/* Étape 2 - Informations personnelles */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Informations personnelles</h2>
                <p className="text-gray-600 mt-2">
                  Veuillez renseigner vos informations personnelles.
                </p>
              </div>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.firstName ? 'border-red-300' : 'border-gray-300'}`}
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.lastName ? 'border-red-300' : 'border-gray-300'}`}
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.email ? 'border-red-300' : 'border-gray-300'}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.phone ? 'border-red-300' : 'border-gray-300'}`}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-2">Date de naissance *</label>
                <input
                  type="date"
                  id="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.dateOfBirth ? 'border-red-300' : 'border-gray-300'}`}
                />
                {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth}</p>}
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 ease-in-out"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* Étape 3 - Localisation */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Localisation</h2>
                <p className="text-gray-600 mt-2">
                  Indiquez votre région et ville de résidence.
                </p>
              </div>
              <div>
                <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">Région *</label>
                <select
                  id="region"
                  value={formData.region}
                  onChange={(e) => handleInputChange('region', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.region ? 'border-red-300' : 'border-gray-300'}`}
                >
                  <option value="">Sélectionnez une région</option>
                  {regions.map(region => (
                    <option key={region.value} value={region.value}>{region.label}</option>
                  ))}
                </select>
                {errors.region && <p className="mt-1 text-sm text-red-600">{errors.region}</p>}
              </div>
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">Ville *</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.city ? 'border-red-300' : 'border-gray-300'}`}
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Adresse</label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 ease-in-out"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* Étape 4 - Expérience politique */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Profil politique</h2>
                <p className="text-gray-600 mt-2">
                  Décrivez votre expérience et vos centres d'intérêt politiques.
                </p>
              </div>
              <div>
                <label htmlFor="politicalExperience" className="block text-sm font-medium text-gray-700 mb-2">Niveau d'expérience politique *</label>
                <select
                  id="politicalExperience"
                  value={formData.politicalExperience}
                  onChange={(e) => handleInputChange('politicalExperience', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-lg ${errors.politicalExperience ? 'border-red-300' : 'border-gray-300'}`}
                >
                  <option value="">Sélectionnez un niveau</option>
                  {experienceLevels.map(level => (
                    <option key={level.value} value={level.value}>{level.label}</option>
                  ))}
                </select>
                {errors.politicalExperience && <p className="mt-1 text-sm text-red-600">{errors.politicalExperience}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Centres d'intérêt politiques *</label>
                <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 border rounded-lg ${errors.politicalInterests ? 'border-red-300' : 'border-gray-300'}`}>
                  {politicalInterestOptions.map(interest => (
                    <div key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        id={interest}
                        checked={formData.politicalInterests.includes(interest)}
                        onChange={() => handleInterestToggle(interest)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={interest} className="ml-2 text-sm text-gray-700">{interest}</label>
                    </div>
                  ))}
                </div>
                {errors.politicalInterests && <p className="mt-1 text-sm text-red-600">{errors.politicalInterests}</p>}
              </div>
              <div>
                <label htmlFor="currentPosition" className="block text-sm font-medium text-gray-700 mb-2">Poste actuel (facultatif)</label>
                <input
                  type="text"
                  id="currentPosition"
                  value={formData.currentPosition}
                  onChange={(e) => handleInputChange('currentPosition', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">Organisation (facultatif)</label>
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => handleInputChange('organization', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 ease-in-out"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out"
                >
                  Continuer
                </button>
              </div>
            </div>
          )}

          {/* Étape 5 - Sécurité */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Sécurité</h2>
                <p className="text-gray-600 mt-2">
                  Créez votre mot de passe et acceptez les conditions.
                </p>
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Mot de passe *</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg pr-10 ${errors.password ? 'border-red-300' : 'border-gray-300'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">Confirmer le mot de passe *</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg pr-10 ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  >
                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                  className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${errors.agreeTerms ? 'border-red-300' : ''}`}
                />
                <label htmlFor="agreeTerms" className="ml-2 text-sm text-gray-700">
                  J'accepte les <a href="#" className="text-blue-600 hover:underline">conditions générales d'utilisation</a> *
                </label>
              </div>
              {errors.agreeTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeTerms}</p>}

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="agreeDataProcessing"
                  checked={formData.agreeDataProcessing}
                  onChange={(e) => handleInputChange('agreeDataProcessing', e.target.checked)}
                  className={`h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 ${errors.agreeDataProcessing ? 'border-red-300' : ''}`}
                />
                <label htmlFor="agreeDataProcessing" className="ml-2 text-sm text-gray-700">
                  J'accepte le traitement de mes données personnelles conformément à la politique de confidentialité *
                </label>
              </div>
              {errors.agreeDataProcessing && <p className="mt-1 text-sm text-red-600">{errors.agreeDataProcessing}</p>}

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-300 transition duration-300 ease-in-out"
                >
                  Précédent
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300 ease-in-out"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;